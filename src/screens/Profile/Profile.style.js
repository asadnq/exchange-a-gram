import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  summaryBox: {
    width: '33.3%',
    flexDirection: 'column'
  },
  summaryText: {
      fontSize: 18,
      textTransform: 'capitalize',
  },
  descriptionContainer: {
      height: height * .2,
      marginTop: height * .03
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
    width: width,
  }
});
