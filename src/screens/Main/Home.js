import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

export class Home extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          <Text style={{ fontSize: 24 }}>username</Text>
        </View>
        <View style={{overflow: 'hidden'}}>
        <Image
          containerStyle={styles.imgWrapper}
          style={styles.img}
          resizeMode='cover'
          source={this.props.post.image}
        />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 10,
            width: '100%'
          }}
        >
          <Icon name='ios-heart' size={32} style={{ marginRight: 10 }} />
          <Icon name='ios-chatboxes' size={32} style={{ marginRight: 10 }} />
          <Icon name='ios-share-alt' size={32} style={{ marginRight: 10 }} />
          </View>
          <View style={{ flexDirection: 'column', paddingHorizontal: 10, paddingVertical: 5 }}>
            <View style={{ flexDirection: 'column', marginBottom: 12 }}>
              <Text style={{ fontWeight: 'bold' }}>{this.props.post.user}</Text>
              <Text>{this.props.post.body}</Text>
            </View>
            <FlatList
              keyExtractor={(item, index) => 'key '+index}
              data={this.props.post.comments}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Text style={{ fontWeight: 'bold', marginRight: 8 }}>{item.user}</Text>
                  <Text>{item.body}</Text>
                </View>
              )}
            />
          </View>
        </View>
    );
  }
}

const mapState = state => {
  return {
    post: state.post.post
  };
};

export default connect(mapState)(Home);

const styles = StyleSheet.create({
  imgWrapper: {
    flexDirection: 'row',
    marginBottom: 12,
    width: '100%',
    height: 300
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});
