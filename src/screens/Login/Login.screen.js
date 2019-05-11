import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input, Icon } from 'react-native-elements';
import styles from './Login.style';

export default class Login extends Component {
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
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>exchange-a-gram</Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            containerStyle={{ paddingLeft: 0, paddingRight: 0, height: '28%' }}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email address or username"
            onChangeText={this.emailInputHandler}
            value={control.email}
          />
          <Input
            containerStyle={{ paddingLeft: 0, paddingRight: 0, height: '28%' }}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={this.passwordInputHandler}
            value={control.password}
          />
          <Button
            containerStyle={{ paddingLeft: 0, paddingRight: 0, height: '28%' }}
            buttonStyle={{ height: '100%' }}
            titleStyle={{
              textTransform: 'capitalize',
              fontSize: 18,
              fontWeight: '500'
            }}
            title="log in"
            onPress={this._login}
          />
        </View>
        <View style={styles.help}>
          <View style={styles.helpLoginContainer}>
            <Text style={styles.helpLoginText} numberOfLines={2}>
              Forgotten your login details?{' '}
              <Text style={styles.helpLoginLink}>
                Get help with signing in.
              </Text>
            </Text>
          </View>
          <View style={styles.orContainer}>
            <View style={styles.singleBorder} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.singleBorder} />
          </View>
          <View style={styles.helpLoginContainer}>
            <TouchableOpacity style={styles.loginWithFacebookWrapper}>
              <Icon name="facebook-square" type='font-awesome' iconStyle={styles.facebookIcon} />
              <Text style={styles.loginWithFacebookText}>
                {' '}Log In with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.registerContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.registerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
