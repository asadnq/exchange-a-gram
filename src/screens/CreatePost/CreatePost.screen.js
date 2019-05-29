import React from 'react';
import { View, Dimensions } from 'react-native';
import { Input, Button, Image, Text } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

import addPostImg from '../../../assets/images/add_image.png';
import styles from './CreatePost.style';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: {
        body: ''
      },
      image: null,
      modalVisible: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'New post',
      headerRight: (
        <Button
          title="share"
          type="solid"
          buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
          titleStyle={{
            textTransform: 'capitalize',
            fontSize: 20,
            color: '#53B8E9'
          }}
          onPress={navigation.getParam('save')}
        />
      )
    };
  };

  _toggleModalVisibility = () => {
    this.setState(state => ({
      ...state.control,
      modalVisible: !state.modalVisible
    }));
  };

  _launchImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    })
      .then(image => {
        console.log(image);
        this.setState(state => ({
          image
        }));
      })
      .catch(err => console.log(err));
  };

  _launchCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    })
      .then(image => {
        console.log(image);
        this.setState({
          ...this.state,
          image
        });
      })
      .catch(err => console.log(err));
  };

  postBodyHandler = val => {
    this.setState(state => {
      return {
        ...state,
        control: {
          ...state.control,
          body: val
        }
      };
    });
  };

  handleUploadData = async () => {
    let image = {
      uri: this.state.image.path,
      type: 'image/jpeg',
      name: 'example'
    };

    let data = new FormData();

    data.append('image', image);
    data.append('user_id', 1);
    data.append('body', this.state.control.body);

    await this.props.createPost(data);

    this.setState(state => ({
      ...state,
      control: {
        ...state.control,
        image: null
      }
    }));
  };

  componentDidMount() {
    this.props.navigation.setParams({
      save: this.handleUploadData.bind(this)
    });
  }

  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View>
        <Modal
          isVisible={this.state.modalVisible}
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInTiming={500}
          animationOutTiming={500}
          onBackdropPress={this._toggleModalVisibility}
          style={{ alignItems: 'center' }}
        >
          <View style={styles.innerModal}>
            <View style={styles.modalHeader}>
              <Text h4>select image</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Button
                type="clear"
                title="capture image with camera"
                onPress={this._launchCamera}
              />
              <Button
                type="clear"
                title="pick image from gallery"
                onPress={this._launchImagePicker}
              />
              <Button
                type="clear"
                title="cancel"
                buttonStyle={{ borderTopWidth: 0.7, borderColor: '#999' }}
                onPress={this._toggleModalVisibility}
              />
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: 'row', height: height * .15 }}>
          <View style={{ flexDirection: 'column', width: '32%' }}>
            <Image
              containerStyle={{ width: '100%', height: height * 0.2 }}
              style={{
                alignSelf: 'stretch',
                flex: 1,
                width: undefined,
                height: undefined
              }}
              resizeMode="cover"
              source={
                this.state.image !== null
                  ? { uri: this.state.image.path }
                  : addPostImg
              }
            />
            <Button
              title="select image"
              type="outline"
              onPress={this._toggleModalVisibility}
            />
          </View>
          <View style={{ width: '68%' }}>
            <Input
              textAlignVertical="top"
              multiline={true}
              inputContainerStyle={{ height: height * 0.2 }}
              inputStyle={{ height: height * 0.2 }}
              placeholder="Write a caption..."
              value={this.state.control.body}
              onChangeText={this.postBodyHandler}
            />
          </View>
        </View>
      </View>
    );
  }
}
