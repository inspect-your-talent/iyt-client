import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Image, YellowBox, ScrollView } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';
import UploadCVButton from '../components/UploadCVButton';
import LoginLinkedin from '../components/LoginLinkedin';
import UserFBPost from '../components/UserPostFB';
import UploadPDF from '../components/Uploadpdf';
import UploadCamera from '../components/UploadCamera';
import { Card, CardItem, Body, Text } from 'native-base';

export default class Home extends Component {

  static navigationOptions = {
    headerTitle: (
      <Image
        source={{ uri: 'https://c1.staticflickr.com/1/823/41666795381_1bc5e5b329_m.jpg' }}
        style={{ width: 90, height: 30 }}
      />
    ),
    headerStyle: {
      backgroundColor: '#FFF'
    },
    headerLeft: null
  }

  render() {
    return (

      <View style={styles.container}>
        <ScrollView>
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
          </View>
          <Text style={styles.homeHeader}>
            List Candidates
        </Text>
          <Text style={styles.homeDescription}>
            List CV of candidates that you have been accepted.
        </Text>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#000', paddingTop: 20, paddingBottom: 20, }]} onPress={() => this.props.navigation.navigate('ListCandidates')}>
            <Text style={[styles.textGrid, { textAlign: 'center', color: '#FFF' }]}>
              View All Candidates
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 25,
    paddingBottom: 50,
  },
  gridUpload: {
    // flexDirection: 'row',
  },
  homeHeader: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  homeDescription: {
    paddingBottom: 30,
    fontSize: 12,
  }
})
