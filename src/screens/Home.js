import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';
import UploadCVButton from '../components/UploadCVButton';
import LoginLinkedin from '../components/LoginLinkedin';
import UserFBPost from '../components/UserPostFB'
import UploadPDF from '../components/Uploadpdf'

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
        <UploadPDF
        navigation={ this.props.navigation}
        />
        <UploadCVButton
          navigation={ this.props.navigation}
        />
        <UserFBPost />
        <Button
          title="Photo Your CV"
          onPress={() => this.props.navigation.navigate('CameraCV')}

        />
      </View>
    );
  }
}
