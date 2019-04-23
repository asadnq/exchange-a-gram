import React, { Component } from 'react'
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';


export class Home extends Component {
  render() {
    return (
      <View>
        <Button title='dummy' onPress={() => alert('asdasdasd')}/>
      </View>
    )
  }
}

export default Home
