import React, { Component } from 'react';
import {  View, Text, Button, Image } from 'react-native';
import {  View, Text, Button } from 'react-native';
import { Spinner } from 'native-base'

export default class WaitingUploadCv extends Component {

  static navigationOptions = {
    title: 'Please Waiting',
    headerLeft: null
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
      <Image  
          source={{ uri: 'https://image.ibb.co/ekQyjH/load.gif'}}
            style={{ width: '100%', height: 180 }} />
   
        <Text style={{ fontSize: 14, textAlign: 'center'}}>We are currently analyzing the CV</Text>
      </View>
    );
  }
}
