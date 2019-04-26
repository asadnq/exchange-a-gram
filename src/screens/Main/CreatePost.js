import React from 'react';
import { View, Dimensions } from 'react-native';
import { Input, Button, Image, Text } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import { createPost } from '../../store/actions/post';
import addPostImg from '../../../assets/images/add_image.png';

class CreatePost extends React.Component {
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

  static navigationOptions = {
    headerRight: (
      <Button title="share" type="solid" onPress={() => alert('share')} />
    )
  };

  _toggleModalVisibility = () => {
    this.setState(state => ({
      ...state.control,
      modalVisible: !state.modalVisible
    }));
  }

  _launchImagePicker = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        this.setState(state => ({
            image
        }))
      }).catch(err => console.log(err));
  }
  
  _launchCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    })
      .then(image => {
        console.log(image);
        // this.setState(state => ({
        //   ...state,
        //   control: {
        //     body: state.body
        //   },
        //   image: image
        // }));
        this.setState({
          ...this.state,
          image
        })
      })
      .catch(err => console.log(err));
  }

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
    }))
  };

  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View>
        <Modal
          isVisible={this.state.modalVisible}
          animationIn="zoomInDown"
          animationOut="zoomOut"
          animationInTiming={500}
          animationOutTiming={500}
          onBackdropPress={this._toggleModalVisibility}
          style={{alignItems: 'center'}}
        >
          <View style={{backgroundColor: '#FFF', borderRadius: 5, width: width * .6, height: '40%', flexDirection: 'column'}}>
            <View style={{paddingHorizontal: 15, paddingTop: 15, flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text h4>select image</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Button type='clear' title='capture image with camera' onPress={this._launchCamera}/>
              <Button type='clear' title='pick image from gallery' onPress={this._launchImagePicker}/>
              <Button type='clear' title='cancel' buttonStyle={{ borderTopWidth: .7, borderColor: '#999'}} onPress={this._toggleModalVisibility}/>
              </View>
          </View>
        </Modal>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            aligntItems: 'center',
            height: height * 0.08
          }}
        >
          <Button
            buttonStyle={{ marginRight: 12 }}
            type="clear"
            title="share"
            onPress={this.handleUploadData}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
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
              placeholder="enter a caption"
              value={this.state.control.body}
              onChangeText={this.postBodyHandler}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  { createPost }
)(CreatePost);
