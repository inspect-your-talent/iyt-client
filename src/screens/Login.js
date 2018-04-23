import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';

export default class Home extends Component {

  static navigationOptions = {
    headerLeft: null
  }

  render() {
    return (
      <View>
        <LoginFacebook
        navigation= {this.props.navigation}/>
      </View>
    );
  }
}
