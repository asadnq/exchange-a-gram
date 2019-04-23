import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { connect } from 'react-redux';

import { login } from '../../store/actions/user';

export class Login extends Component {

  state = {
    control:{
      email: '',
      password: '' 
    }
  }

  emailInputHandler = value => {
    this.setState(state => {
      return {
        control: {
          ...state.control,
          email: value
        }
      }
    });
  }

  passwordInputHandler = value => {
    this.setState(state => {
      return {
        control: {
          ...state.control,
          password: value
        }
      }
    });
  }

  _login = () => {
    this.props.login(this.state.control);
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    const { control } = this.state;

    return (
      <View>
        <Text h3>Sign in</Text>
        <Input placeholder='email' onChangeText={this.emailInputHandler} value={control.email}/>
        <Input placeholder='password' secureTextEntry={true} onChangeText={this.passwordInputHandler} value={control.password}/>
        <Button title='login' onPress={this._login} />
      </View>
    )
  }

}

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(null, mapDispatch)(Login)
