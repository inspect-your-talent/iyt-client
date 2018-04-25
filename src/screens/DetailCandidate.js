import React, { Component } from 'react';
import ProfileUser from '../components/ProfileUser';
import Experience from '../components/experiences';
import ProfileImage from '../components/ProfileImage';
import ProgrammingExperience from '../components/ProgrammingExperience';
import Favorites from '../components/Favorite';
import TopicProgramming from '../components/TopicProgramming';
import SentimentAnalys from '../components/SentimenAnalysis';
import Loading from '../components/Loading'
import {Container, Card, Content, Button, Text, Tab, Tabs, ScrollableTab} from 'native-base';
import { View, StyleSheet } from 'react-native'
import axios from '../axios'

export default class DetailProfile extends Component {

  state = {
    candidate: null,
    loading: true
  }
  static navigationOptions = {
    title: 'Summary',
    headerTitle: 'Summary',
    headerStyle: {
      backgroundColor: '#FFF',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  componentDidMount() {
    this.fetchCV()
  }

  fetchCV = () => {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    axios.get(`/candidates/details/${id}`).then((res) => {
      this.setState({
        candidate: res.data.data,
        loading: false
      })
      console.log(res.data.data, ' ini master data')
    }).catch(err => {
      this.setState({
        loading: false
      })
      console.log(err)
    })
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return (
        <Loading />
      )
    }
    if (this.state.candidate) {
      const {
        facebookAnalyzing,
        twitterAnalyzing,
        githubAnalyzing,
        githubProfile,
        twitterProfile,
        facebookProfile,
        isProgrammer
      } = this.state.candidate
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
        </Container>
      );
    } else {
      return <View />
    }

  }
}

