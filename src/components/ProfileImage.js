import React, { Component } from 'react';
import { Text, Thumbnail, View } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    const { name, image, headline } = this.props.data
    return (
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Thumbnail large source={{ uri: image }} />
        <Text style={{fontSize:20, paddingTop:10, color:"#3498db"}}>{ name }</Text>
        <Text style={{fontSize:14, paddingTop:4, paddingBottom:20, color:"#3498db"}}>{ headline }</Text>
      </View>
    );
  }
}
