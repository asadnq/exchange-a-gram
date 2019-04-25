import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Text, Image, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { POST_IMAGE_PATH, PROFILE_PICTURE_PATH } from '../../config/url.config';

const Post = props => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Avatar rounded containerStyle={styles.userAvatar} source={{uri: PROFILE_PICTURE_PATH + props.user.profile_pict}} />
      <Text style={styles.username}>{props.user.username}</Text>
    </View>
    <Image
      containerStyle={styles.imgWrapper}
      style={styles.img}
      resizeMode='cover'
      source={{ uri: POST_IMAGE_PATH + props.image.image}}
    />
    <View style={styles.actionBar}>
      <Icon name='ios-heart' size={32} style={styles.icon} />
      <Icon name='ios-chatboxes' size={32} style={styles.icon} />
      <Icon name='ios-share-alt' size={32} style={styles.icon} />
    </View>
    <View style={styles.descriptionWrapper}>
      <View style={{ flexDirection: 'column', marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>{props.user.username}</Text>
        <Text>{props.body}</Text>
      </View>
    </View>
  </View>
);

export default Post;

const { width, height } = Dimensions.get('window');

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
  imgWrapper: {
    flexDirection: 'row',
    marginBottom: 12,
    width: '100%',
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