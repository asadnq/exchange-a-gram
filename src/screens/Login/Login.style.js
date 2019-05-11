import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  headingContainer: {
    height: height * 0.25,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#333'
  },
  formContainer: {
    height: height * 0.32,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  inputContainer: {
    borderBottomWidth: 0,
    height: '100%'
  },
  input: {
    height: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'rgb(244,244,244)',
    color: '#333',
    fontWeight: '400',
    fontSize: 20
  },
  help: {
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    flexDirection: 'column',
    height: height * 0.3
  },
  helpLoginContainer: {
    height: '45%',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  helpLoginText: {
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: '10%'
  },
  helpLoginLink: {
    fontWeight: 'bold',
    color: '#111'
  },
  loginWithFacebookWrapper: {
    flexDirection: 'row',
    width: '100%'
  },
  facebookIcon: {
    color: '#3879f0'
  },
  loginWithFacebookText: {
    fontSize: 17,
    color: '#3897F0',
    fontWeight: '500'
  },
  orContainer: {
    flexDirection: 'row',
    height: '15%',
    alignItems: 'center'
  },
  orText: {
    width: '15%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#aaa'
  },
  singleBorder: {
    height: 1,
    backgroundColor: '#ccc',
    width: '42%'
  },
  registerContainer: {
    height: height * 0.12,
    width: width,
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    paddingTop: 0.2,
    flexDirection: 'row',
    paddingTop: height * 0.02
  },
  registerLink: {
    color: '#222',
    fontWeight: 'bold'
  }
});
