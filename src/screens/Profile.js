import React, { Component } from 'react';
// import {  View, Text, } from 'react-native';
import ProfileUser from '../components/ProfileUser';
import Experience from '../components/experiences';
import ProfileImage from '../components/ProfileImage';
import ProgrammingExperience from '../components/ProgrammingExperience';
import Favorites from '../components/Favorite';
import TopicProgramming from '../components/TopicProgramming';
import SentimentAnalys from '../components/SentimenAnalysis';
import {Container, Card, Content, Button, Text, Tab, Tabs, ScrollableTab} from 'native-base';
import { connect } from 'react-redux'
import { View, StyleSheet, Alert } from 'react-native'
import axios from '../axios'

class Profile extends Component {

  static navigationOptions = {
    headerLeft: null
  }

  saveCv = () => {
    const { result, id } = this.props
    Alert.alert(
      'Confirmation',
      'Do you want to save this cv ?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => {
          axios.post(`/candidates/${id}`,{candidate: result}).then((res) => {
            this.props.navigation.navigate('ListCandidates')
          }).catch(err => console.log(err))
        }},
      ],
      { cancelable: false }
    )
  }

  ignoreCv = () => {
    Alert.alert(
      'Alert',
      'Do you want to ignore this cv ?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => {
          this.props.navigation.navigate('Home')
        }},
      ],
      { cancelable: false }
    )
  }

  render() {
    if (this.props.result) {
      const {
        facebookAnalyzing,
        twitterAnalyzing,
        githubAnalyzing,
        githubProfile,
        twitterProfile,
        facebookProfile,
        isProgrammer
      } = this.props.result
      return (
        <Container>
          <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Profile" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
                <ProfileImage data = {{
                  name : facebookAnalyzing.name,
                  image: facebookAnalyzing.photo_profile,
                  headline: twitterAnalyzing.profileHeader,
                  githubProfile,
                  facebookProfile,
                  twitterProfile
                }}/>
            </Tab>
            <Tab heading="Sentiment Analysis" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
              <SentimentAnalys
                data = {{
                  positif: twitterAnalyzing.score.score.positif,
                  netral: twitterAnalyzing.score.score.netral,
                  negatif: twitterAnalyzing.score.score.negatif,
                }}
              />
            </Tab>
            <Tab heading="Experiences" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
              <Experience
                data = {{
                  experiences: facebookAnalyzing.experiences
                }}
              />
            </Tab>
            <Tab heading="Programming Interest" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
              <TopicProgramming data ={{
                isProgrammer
              }} />
            </Tab>
            <Tab heading="Programming Experience" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
                <ProgrammingExperience data={{
                contribution: githubAnalyzing.contribution,
                follower: githubAnalyzing.follower,
                following: githubAnalyzing.following,
                repo: githubAnalyzing.repo,
                stars : githubAnalyzing.stars,
                languages : githubAnalyzing.languages
              }}/>
            </Tab>
            <Tab heading="Facebook Favorites" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
              <Favorites
                data = {{
                  fav: facebookAnalyzing.favorites
                }}
              />
            </Tab>
          </Tabs>
          <Button
            onPress={() => {
              this.ignoreCv()
             }}
             danger
             full
              >
              <Text> Ignore </Text>
          </Button>
          <Button
              onPress={() => {
              this.saveCv()
              }}
              primary
              full
              >
              <Text> Save </Text>
          </Button>
        </Container>
      );
    } else {
      return <View />
    }

  }
}


const mapStateToProps = state => {
  return {
    result: state.reducer.resultAnalysist,
    id: state.reducer.fb_id
  }
}

export default connect(mapStateToProps, null)(Profile)
