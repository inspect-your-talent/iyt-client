import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <LoginFacebook />
      </View>
    );
  }
}
