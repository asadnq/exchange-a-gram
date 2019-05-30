import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';

import Post from '../../components/post/PostItem';
import HeaderHome from '../../components/headers/HeaderHome';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <HeaderHome />
  });

  componentDidMount() {
    this.props.getPosts();
    this.props.getUser(this.props.authUser.id)
  }

  _toPostDetail(id) {
    this.props.navigation.navigate('PostDetail');
    this.props.getPost(id);
  }

  _toPostsComment = id => {
    this.props.navigation.navigate('PostComment');
    // this.props.getPost(id);
    this.props.getPostsComment(id);
  };

  _likePostHandler = id => {
    this.props.likePost(id); 
  }

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => 'key' + index}
        data={this.props.posts}
        renderItem={({ item }) => (
          <Post
            {...item}
            commentButtonOnPress={this._toPostsComment.bind(this, item.id)}
            likeButtonOnPress={this._likePostHandler.bind(this, item.id)}
            bodyAction={this._toPostDetail.bind(this, item.id)}
          />
        )}
      />
    );
  }
}
