import React, { Component } from 'react';
// import {  View, Text, } from 'react-native';
import ProfileUser from '../components/ProfileUser';
import Experience from '../components/experiences';
import ProfileImage from '../components/ProfileImage';
import ProgrammingExperience from '../components/ProgrammingExperience'
import Favorites from '../components/Favorite';
import SentimentAnalys from '../components/SentimenAnalysis'
import {Container, Card, Content} from 'native-base'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Content>
          <ProfileImage />
          <ProfileUser />
          <ProgrammingExperience />
          <SentimentAnalys/>
          <Experience />
          <Favorites />
          </Content>
        </Card>
      </Container>
    );
  }
}
