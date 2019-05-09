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

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => 'key' + index}
        data={this.props.posts}
        renderItem={({ item }) => (
          <Post
            {...item}
            commentButtonAction={this._toPostsComment.bind(this, item.id)}
            bodyAction={this._toPostDetail.bind(this, item.id)}
          />
        )}
      />
    );
  }
}
