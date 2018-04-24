import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';
import { Spinner } from 'native-base'


export default class WaitingUploadCv extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Spinner color="blue" />
        <Text style={{ fontSize: 24}}>Please Wait</Text>
        <Text style={{ fontSize: 16}}>We are currently analyzing the cv</Text>
      </View>
    );
  }
}
