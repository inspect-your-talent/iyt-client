import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';
import UploadCVButton from '../components/UploadCVButton';
import LoginLinkedin from '../components/LoginLinkedin';
import UserFBPost from '../components/UserPostFB'

export default class Home extends Component {

  static navigationOptions = {
    headerLeft: null
  }
  
  render() {
    return (
      <View>
        <Text> Home </Text>
        <LoginFacebook />
        <LoginLinkedin />
        <UploadCVButton />
        <UserFBPost />
        <Button
          title="Photo Your CV"
          onPress={() => this.props.navigation.navigate('CameraCV')}
        />
      </View>
    );
  }
}
