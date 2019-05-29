import React, { Component } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import {
  Button,
  Input,
  Image,
  Text,
  Avatar,
  ButtonGroup
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { PROFILE_PICTURE_PATH, POST_IMAGE_PATH } from '../../config/url.config';
import styles from './Profile.style';

// const SinglePostImage = props => (
//   <Image ..
// )

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }

  static navigationOptions = ({navigation}) => {

    const username = navigation.getParam('username');    

    return {
      title: username,
      titleStyle: {
        fontWeight: 'bold',
        fontSize: 24  
      }
    }  
  } 

  componentDidMount() {
    this.props.navigation.setParams({username: this.props.user.username})
  }


  render() {
    const buttons = [
      <Icon name="grid-on" size={30} />,
      <Icon name="view-day" size={30} />
    ];
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
              flexDirection: 'row'
            }}
          >
            <View style={styles.avatarBlock}>
              <Image
                containerStyle={styles.avatarContainer}
                style={styles.avatar}
                source={{
                  uri: PROFILE_PICTURE_PATH + this.props.user.profile_pict
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
              <View style={styles.summaryContainer}>
                <View style={styles.summaryBox}>
                  <Text style={styles.summaryValue}>300</Text>
                  <Text style={styles.summaryText} numberOfLines={1}>
                    posts
                  </Text>
                </View>
                <View style={styles.summaryBox}>
                  <Text style={styles.summaryValue}>1,732</Text>
                  <Text style={styles.summaryText} numberOfLines={1}>
                    Followers
                  </Text>
                </View>
                <View style={styles.summaryBox}>
                  <Text style={styles.summaryValue}>201</Text>
                  <Text style={styles.summaryText} numberOfLines={1}>
                    Following
                  </Text>
                </View>
              </View>
              <View style={styles.summaryAction}>
                <Button
                  containerStyle={{ width: '100%' }}
                  buttonStyle={{ height: '50%' }}
                  title="edit profile"
                />
              </View>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.username}>{this.props.user.username}</Text>
            <Text style={styles.about}>Fortune favors the bold.</Text>
          </View>
        </View>
        <ButtonGroup
          buttons={buttons}
          containerStyle={styles.buttonGroupContainer}
          selectedIndex={this.state.selectedIndex}
        />
        <View style={styles.postsContainer}>
          <FlatList
            data={this.props.user.posts}
            numColumns={3}
            keyExtractor={item => 'key' + item.id}
            renderItem={({ item }) => (
              <Image
                source={
                  item.image !== null
                    ? { uri: POST_IMAGE_PATH + item.images[0].image }
                    : ''
                }
                style={{ height: 150, width: '100%' }}
                containerStyle={{ width: '33%', height: '33%', margin: '.2%' }}
              />
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const { width, height } = Dimensions.get('window');
