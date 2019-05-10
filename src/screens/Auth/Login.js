import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';

import { login } from '../../store/actions/auth';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      control: {
        email: 'test@mail.de',
        password: '12345678'
      }
    };
  }

  static navigationOptions = {
    header: null
  };

  emailInputHandler = value => {
    this.setState(state => {
      return {
        control: {
          ...state.control,
          email: value
        }
      };
    });
  };

  passwordInputHandler = value => {
    this.setState(state => {
      return {
        control: {
          ...state.control,
          password: value
        }
      };
    });
  };

  _login = () => {
    this.props.login(this.state.control);
  };

  render() {

    const { control } = this.state;
    return (
      <View style={{ alignItems: 'center', padding: '3%' }}>
        <View style={{height: '30%'}}>
          <Text h3>Sign in</Text>
        </View>
        <View
          style={{
            height: '70%',
            width: '85%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 5
          }}
        >
          <View style={{ flex: 1 }}>
            <Input
              autoCapitalize='none'
              keyboardType='email-address'
              placeholder='email'
              onChangeText={this.emailInputHandler}
              value={control.email}
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            />
            <Input
              placeholder='password'
              secureTextEntry={true}
              onChangeText={this.passwordInputHandler}
              value={control.password}
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
            />
          </View>
          <Button title='login' onPress={this._login} />
        </View>
      </View>
    );
  }
}


const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  null,
  mapDispatch
)(Login);