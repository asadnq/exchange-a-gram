import React from 'react'
import { View } from 'react-native'
import { Input, Button, Image } from 'react-native-elements'
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { connect } from 'react-redux';

import { createPost } from '../../store/actions/post';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            control: {
                body: ''
            }
        };
    }

    static navigationOptions = {
        headerRight: (
            <Button title='share' type='solid' onPress={() => alert('share')}/>
        )
    }

    _launchImagePicker = () => {
        ImagePicker.openCamera({
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

    postBodyHandler = (val) => {
        this.setState(state => {
            return {
                ...state,
                control: {
                    body: val
                }
            }
        })
    }
    
    handleUploadData =  () => {
        let image = {
            uri: this.state.image.path,
            type: 'image/jpeg',
            name: 'example'
        }

        let data = new FormData();

        data.append('image', image);
        data.append('user_id', 1);
        data.append('body', this.state.control.body);

        this.props.createPost(data);
    }

    render() {
        return (
            <View>
                <Button title='pick image' onPress={this._launchImagePicker} />
                <Input placeholder='enter a caption' value={this.state.control.body} onChangeText={this.postBodyHandler}/>
                <Image source={{uri: this.state.image.path}} style={{width: 300, height: 300}}/>
                <Button title='upload' onPress={this.handleUploadData} />
            </View>
        );
    }
}

export default connect(null, { createPost })(CreatePost);