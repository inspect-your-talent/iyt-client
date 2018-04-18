import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import UploadCVButton from '../components/UploadCVButton';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <UploadCVButton />
      </View>
    );
  }
}
