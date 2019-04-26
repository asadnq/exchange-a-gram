import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import { Avatar, Image, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { getPostsComment } from '../../store/actions/post';
import { PROFILE_PICTURE_PATH, POST_IMAGE_PATH } from '../../config/url.config';

class PostDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  _toPostsComment = () => {
    this.props.navigation.navigate('PostComment');
    this.props.getPostsComment(this.props.post.id);
  };

  render() {
    const { post } = this.props;

    if (this.props.isLoading) {
      return <ActivityIndicator />;
    }

    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Avatar
            rounded
            conatienrStyle={styles.userAvatar}
            source={{ uri: PROFILE_PICTURE_PATH + post.user.profile_pict }}
          />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => 'img ' + index}
          data={post.images}
          renderItem={({ item }) => (
            <Image
              containerStyle={styles.imgWrapper}
              style={styles.img}
              resizeMode='cover'
              source={{ uri: POST_IMAGE_PATH + item.image }}
            />
          )}
        />
        <View style={styles.actionBar}>
          <Icon name='ios-heart' size={32} style={styles.icon} />
          <TouchableOpacity onPress={this._toPostsComment}>
            <Icon name='ios-chatboxes' size={32} style={styles.icon} />
          </TouchableOpacity>
          <Icon name='ios-share-alt' size={32} style={styles.icon} />
        </View>
        <TouchableOpacity style={styles.descriptionWrapper}>
          <Text style={{ fontWeight: 'bold' }}>{post.user.username}</Text>
          <Text>{post.body}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapState = state => {
  return {
    post: state.post.post,
    isLoading: state.post.isLoading
  };
};

export default connect(
  mapState,
  { getPostsComment }
)(PostDetail);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  postContainer: {
    width: width,
    height: height * 0.85,
    flexDirection: 'column'
  },
  postHeader: {
    height: height * 0.07,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userAvatar: {
    marginRight: 10
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16
  },
  imgWrapper: {
    flexDirection: 'row',
    marginBottom: 12,
    width: width,
    height: height * 0.6
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    height: height * 0.05
  },
  icon: {
    marginRight: 8,
    color: '#ccc'
  },
  descriptionWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: height * 0.12
  }
});
