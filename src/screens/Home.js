import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';
import UploadCVButton from '../components/UploadCVButton';
import LoginLinkedin from '../components/LoginLinkedin';
import UserFBPost from '../components/UserPostFB'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <LoginFacebook />
        <LoginLinkedin />
        <UploadCVButton />
        <UserFBPost />
      </View>
    );
  }
}
