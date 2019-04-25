import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import Post from '../../components/post/Post';
import { getPosts } from '../../store/actions/post';

export class Home extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => 'key' + index}
        data={this.props.posts}
        renderItem={({item}) => <Post {...item} />}
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

export default connect(mapState, { getPosts })(Home);