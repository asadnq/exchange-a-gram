import React from 'react';
import { StyleSheet , View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';


const { width, height } = Dimensions.get('window');

const HeaderHome = ({ navigation }) => {

  onPressCamera = () => () => {
//    navigation.navigate('Camera')
    alert('camera')
  };

  onPressPlane = () => () => {
    // navigation.navigate('Inbox')
    alert('plane')
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <TouchableOpacity onPress={onPressCamera()}>
          <Icon name="ios-camera" style={styles.camera} />
        </TouchableOpacity>
        <Text style={styles.title}>Exchange a gram</Text>
      </View>
      <View style={styles.rightItem}>
        <TouchableOpacity onPress={onPressPlane()}>
          <Icon name="ios-paper-plane" style={styles.plane} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(HeaderHome);

const styles = StyleSheet.create({
  container: {
    width,
    height: 60,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderColor: '#b4b6b7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  camera: {
    fontSize: 40,
    paddingHorizontal: 16
  },
  plane: {
    fontSize: 30,
    paddingHorizontal: 16
  },
  tv: {
    height: 25,
    width: 25
  },
  title: {
    fontFamily: 'Billabong',
    fontSize: 30,
    color: '#000',
    marginTop: 15
  }
});
