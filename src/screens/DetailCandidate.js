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
import { View, StyleSheet } from 'react-native'
import axios from '../axios'

export default class DetailProfile extends Component {

  state = {
    candidate: null
  }

  componentDidMount() {
    this.fetchCV()
  }

  fetchCV = () => {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    axios.get(`/candidates/details/${id}`).then((res) => {
      this.setState({
        candidate: res.data.data
      })
      console.log(res.data.data, ' ini master data')
    }).catch(err => console.log(err))
  }

  render() {
    console.log('Ini dia kadidat ', this.state.candidate)
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
              <View style={ styles.parentStyle }>
                <ProfileImage data = {{
                  name : facebookAnalyzing.name,
                  image: facebookAnalyzing.photo_profile,
                  headline: twitterAnalyzing.profileHeader
                }}/> 
              </View>
            </Tab>
            <Tab heading="Sosmed URL" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
              <ProfileUser data = {{
                githubProfile,
                facebookProfile,
                twitterProfile
              }}/>
            </Tab>
            <Tab heading="Sentiment Analys" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
              <SentimentAnalys
                data = {{
                  positif: twitterAnalyzing.score.score.positif,
                  netral: twitterAnalyzing.score.score.netral,
                  negatif: twitterAnalyzing.score.score.negatif,
                }}
              />
            </Tab>
            <Tab heading="Experience" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
              <Experience
                data = {{
                  experiences: facebookAnalyzing.experiences
                }}
              />
            </Tab>
            <Tab heading="Programming Topic" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
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
            <Tab heading="Favorites" tabStyle={{backgroundColor: 'black'}} activeTabStyle={{backgroundColor: 'black'}}>
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

const styles = StyleSheet.create({
  parentStyle: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
  }
})