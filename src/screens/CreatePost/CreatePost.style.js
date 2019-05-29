import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  innerModal: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    width: width * 0.6,
    height: '40%',
    flexDirection: 'column'
  },
  modalHeader: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
