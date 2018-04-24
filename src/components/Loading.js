import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';
import { Spinner } from 'native-base'


export default class Loading extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Spinner color="blue" />
        <Text style={{ fontSize: 16}}>Loading...</Text>
      </View>
    );
  }
}
