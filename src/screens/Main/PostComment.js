import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import { Avatar, Text, Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { PROFILE_PICTURE_PATH } from '../../config/url.config';
import { addComment } from '../../store/actions/comment';

class PostComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      control: {
        comment: ''
      }
    };
  }

  static navigationOptions = {
    headerTitle: 'Comments'
  }

  _inputCommentHandler = val => {
    this.setState({
      control: {
        comment: val
      }
    });
  };

  _addCommentHandler = () => {
    const comment = {
      body: this.state.control.comment,
      post_id: this.props.post.id
    };

    this.setState({
      control: {
        comment: ''
      }
    })

    this.props.addComment(comment);
    Keyboard.dismiss()
  };

  render() {
    const { post } = this.props;

    if (this.props.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <View>
        <ScrollView style={styles.container}>
          <View style={styles.postContainer}>
            <Avatar
              rounded
              size="medium"
              containerStyle={styles.userAvatar}
              source={{ uri: PROFILE_PICTURE_PATH + post.user.profile_pict }}
            />
            <View style={styles.post}>
              <Text style={styles.username}>{post.user.username} </Text>
              <Text style={styles.postBody}>{post.body}</Text>
            </View>
          </View>
          <FlatList
            keyExtractor={(item, index) => 'comment ' + index}
            data={post.comments}
            renderItem={({ item }) => {
              return (
                <View style={styles.commentContainer}>
                  <Avatar
                    rounded
                    size="medium"
                    containerStyle={styles.userAvatar}
                    source={{
                      uri: PROFILE_PICTURE_PATH + item.user.profile_pict
                    }}
                  />
                  <View style={styles.comment}>
                    <Text style={styles.username}>{item.user.username} </Text>
                    <Text style={styles.commentBody}>{item.body}</Text>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
        <View style={styles.addComentContainer}>
          <Avatar
            rounded
            size="medium"
            containerStyle={styles.userAvatar}
            source={{
              uri: PROFILE_PICTURE_PATH + this.props.user.profile_pict
            }}
          />
          <Input
            containerStyle={{ padding: 5, width: '70%' }}
            inputContainerStyle={{ borderBottomColor: 'hsla(0,0%,0%,0)' }}
            placeholder="Add a comment..."
            onChangeText={this._inputCommentHandler}
            value={this.state.control.comment}
          />
          <Button
            type="clear"
            title="Post"
            containerStyle={{ width: '15%' }}
            onPress={this._addCommentHandler}
          />
        </View>
      </View>
    );
  }
}

const mapState = state => {
  return {
    post: state.post.posts_comment,
    isLoading: state.post.isLoading,
    user: state.user.user
  };
};

export default connect(
  mapState,
  { addComment }
)(PostComment);

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column'
  },
  postContainer: {
    alignSelf: 'stretch',
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 20,
    borderBottomWidth: 0.8,
    borderColor: '#ccc',
    alignItems: 'flex-start'
  },
  userAvatar: {
    marginRight: 10,
  },
  post: {
    flexDirection: 'row',
    marginTop: 5,
    width: '70%'
  },
  postBody: {
    fontSize: 18
  },
  username: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 18
  },
  commentContainer: {
    flexDirection: 'row',
    padding: 13,
    alignItems: 'flex-start'
  },
  comment: {
    flexDirection: 'row',
    marginTop: 5
  },
  commentBody: {
    fontSize: 18
  },
  addComentContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    height: height * 0.1,
    borderTopColor: '#aaa',
    borderTopWidth: 0.7,
    paddingHorizontal: 15
  }
});
