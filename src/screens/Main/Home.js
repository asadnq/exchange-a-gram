import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import Post from '../../components/post/Post';
import { getPosts, getPost, getPostsComment } from '../../store/actions/post';

export class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  _toPostDetail(id) {
    this.props.navigation.navigate('PostDetail');
    this.props.getPost(id);
  }

  _toPostsComment = (id) => {
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

const mapState = state => {
  return {
    posts: state.post.posts,
    post: state.post.post
  };
};

export default connect(
  mapState,
  { getPosts, getPost, getPostsComment }
)(Home);
