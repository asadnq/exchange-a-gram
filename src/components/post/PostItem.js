import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Text, Image, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { POST_IMAGE_PATH, PROFILE_PICTURE_PATH } from '../../config/url.config';
import addPostImg from '../../../assets/images/add_image.png';
import { Comment, Like, PaperPlane } from '../icons'

class PostItem extends React.Component {

  constructor(props) {
    super(props);
    let showMore = this.props.body.length > 45
    this.state = {
      showMore: showMore  
    }
  }  
 
  _onShowMore = () => {
    this.setState({showMore: !this.state.showMore})   
  }
  
  render() {
    const buttonShowMore = (
      <Text onPress={this._onShowMore} style={styles.showmore}>
        show more
      </Text>
    );
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Avatar
            rounded
            containerStyle={styles.userAvatar}
            source={{ uri: PROFILE_PICTURE_PATH + this.props.user.profile_pict }}
          />
          <Text style={styles.headerUsername}>{this.props.user.username}</Text>
        </View>
        <Image
          containerStyle={styles.imgWrapper}
          style={styles.img}
          resizeMode="cover"
          source={
            this.props.images !== null
              ? { uri: POST_IMAGE_PATH + this.props.images[0].image }
              : addPostImg
          }
        />
        <View style={styles.actionBar}>
          <View style={styles.actionLeft}>
          <Like size={30}/>
          <TouchableOpacity onPress={this.props.commentButtonAction}>
            <Comment size={30} />
          </TouchableOpacity>
          <PaperPlane size={30} />
          </View>
          <View style={styles.actionRight}>
          
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <View style={{ flexDirection: 'column', marginBottom: 12 }}>
            <Text style={{ fontWeight: 'bold' }}>{this.props.user.username}</Text>
            {this.state.showMore ? (
              <Text>
                {this.props.body.substr(0, 45)}
                {` ....`}
                {buttonShowMore}
              </Text>
            ) : (
              <Text>{this.props.body}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default PostItem;

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
  headerUsername: {
    fontWeight: 'bold',
    fontSize: 16
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
  actionLeft: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '38%'
  },
  descriptionWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: height * 0.12
  }
});
