import React, { Component } from 'react';
import { Text, Thumbnail, View } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    return (
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Thumbnail large source={{ uri: 'http://art.sdsu.edu/wp-content/uploads/2015/02/default-user-01.png' }} />
        <Text style={{fontSize:20, paddingTop:10, color:"#3498db"}}>Siti Rohimah</Text>
        <Text style={{fontSize:14, paddingTop:4, paddingBottom:20, color:"#3498db"}}>Web & Mobile App developer | Co-founder PT Andaglos Global Teknologi | Always willing to learn ..</Text>
       </View>
    );
  }
} 

