import React, { Component } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import { Button, Input, Image, Text, Avatar } from 'react-native-elements';

import { PROFILE_PICTURE_PATH, POST_IMAGE_PATH } from '../../config/url.config';
import styles from './Profile.style';

// const SinglePostImage = props => (
//   <Image ..
// )

export default class Profile extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            paddingHorizontal: width * 0.05,
            paddingVertical: height * 0.03
          }}
        >
          <View
            style={{
              height: height * 0.2,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={{
                  uri: PROFILE_PICTURE_PATH + this.props.user.profile_pict
                }}
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                  height: undefined,
                  width: undefined,
                  borderRadius: 300
                }}
                containerStyle={{
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  paddingRight: '14%',
                  paddingLeft: '7%',
                  paddingVertical: '7%'
                }}
              />
            </View>
            <View
              style={{
                width: '60%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop: '5%'
              }}
            >
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View style={styles.summaryBox}>
                  <Text
                    style={{ width: '100%', fontSize: 28, fontWeight: 'bold' }}
                  >
                    300
                  </Text>
                  <Text style={styles.summaryText} numberOfLines={1}>
                    posts
                  </Text>
                </View>
                <View style={styles.summaryBox}>
                  <Text
                    style={{ width: '100%', fontSize: 28, fontWeight: 'bold' }}
                  >
                    201
                  </Text>
                  <Text style={styles.summaryText} numberOfLines={1}>
                    Following
                  </Text>
                </View>
                <View style={styles.summaryBox}>
                  <Text
                    style={{ width: '100%', fontSize: 28, fontWeight: 'bold' }}
                  >
                    1,732
                  </Text>
                  <Text style={styles.summaryText} numberOfLines={1}>
                    Followers
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Button containerStyle={{ width: '60%' }} title="message" />
                <Button containerStyle={{ width: '19%' }} title="foo" />
                <Button containerStyle={{ width: '16%' }} title="b" />
              </View>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.username}>{this.props.user.username}</Text>
            <Text style={styles.about}>Fortune favors the bold.</Text>
          </View>
        </View>
        <View style={styles.postsContainer}>
          <FlatList
            data={this.props.posts}
            numColumns={3}
            keyExtractor={item => 'key' + item.id}
            renderItem={({ item }) => (
              <Image
                source={
                  item.image !== null
                    ? { uri: POST_IMAGE_PATH + item.image.image }
                    : ''
                }
                style={{height: 150, width: '100%'}}
                containerStyle={{width: '33%', height:'33%', margin: '.2%'}}
              />
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const { width, height } = Dimensions.get('window');
