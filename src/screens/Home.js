import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import UploadCVButton from '../components/UploadCVButton';
import LoginLinkedin from '../components/LoginLinkedin';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <UploadCVButton />
        <LoginLinkedin />
      </View>
    );
  }
}
