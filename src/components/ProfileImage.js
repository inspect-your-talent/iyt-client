import React, { Component } from 'react';
import { Text, Thumbnail, View, Card, CardItem, Content } from 'native-base'

export default class Profile extends Component {
  render() {
    const { name, image, headline } = this.props.data
    return (
      <View style={{flex: 1, justifyContent:'flex-start', alignItems:'center', padding: 36 }}>
          <Thumbnail large source={{ uri: image }} />
          <Text style={{fontSize:20, paddingTop:16}}>{ name }</Text>
          <Text style={{fontSize:14}}>{ headline }</Text>
      </View>
    );
  }
}
