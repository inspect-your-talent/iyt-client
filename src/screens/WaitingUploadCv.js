import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';


export default class WaitingUploadCv extends Component {

  static navigationOptions = {
    headerLeft: null
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ fontSize: 32}}>We are Analyzing The uploaded CV</Text>
      </View>
    );
  }
}
