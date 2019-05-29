import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  avatarBlock: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    paddingRight: '14%',
    paddingLeft: '7%',
    paddingVertical: '7%'
  },
  avatar: {
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
    borderRadius: 300
  },
  summaryContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  summaryBox: {
    width: '33.3%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  summaryValue: {
    width: '100%',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222'
  },
  summaryText: {
    fontSize: 17,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#aaa',
    width: '85%'
  },
  summaryAction: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  descriptionContainer: {
    height: height * 0.2,
    marginTop: height * 0.03
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111'
  },
  about: {
    fontSize: 20,
    color: '#555'
  },
  postsContainer: {
    width: width
  },
  buttonGroupContainer: {
    height: height * 0.07,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});
