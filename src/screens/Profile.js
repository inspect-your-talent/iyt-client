import React, { Component } from 'react';
// import {  View, Text, } from 'react-native';
import ProfileUser from '../components/ProfileUser';
import {Container} from 'native-base'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ProfileUser />
      </Container>
    );
  }
}
