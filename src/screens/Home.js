import React, { Component } from 'react';
import {  View, Button, StyleSheet } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';
import UploadCVButton from '../components/UploadCVButton';
import LoginLinkedin from '../components/LoginLinkedin';
import UserFBPost from '../components/UserPostFB';
import UploadPDF from '../components/Uploadpdf';
import UploadCamera from '../components/UploadCamera';
import { Card, CardItem, Body, Text } from 'native-base';

export default class Home extends Component {

  static navigationOptions = {
    headerLeft: null,
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.gridUpload}>
          <UploadPDF
            navigation={this.props.navigation}
          />
          <UploadCVButton
            navigation={this.props.navigation}
          />
          <UploadCamera 
            navigation={this.props.navigation}
          />
          {/* <Button
            title="Photo"
            onPress={() => this.props.navigation.navigate('CameraCV')}
          /> */}
        </View>
        <Button
          title="Candidate"
          onPress={() => this.props.navigation.navigate('ListCandidates')}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  gridUpload: {
    flexDirection: 'row',
  }
})
