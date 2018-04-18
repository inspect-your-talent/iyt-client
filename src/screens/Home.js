import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import LoginLinkedin from '../components/LoginLinkedin'
import ProfilLinkedin from '../components/UserProfileLinkedin'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <LoginLinkedin />
        <ProfilLinkedin />
      </View>
    );
  }
}
