import React, { Component } from 'react';
// import {  View, Text, } from 'react-native';
import ProfileUser from '../components/ProfileUser';
import Experience from '../components/experiences';
import ProfileImage from '../components/ProfileImage';
import ProgrammingExperience from '../components/ProgrammingExperience';
import Favorites from '../components/Favorite';
import TopicProgramming from '../components/TopicProgramming';
import SentimentAnalys from '../components/SentimenAnalysis';
import {Container, Card, Content, Button, Text} from 'native-base';
import { View } from 'react-native'
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
          <Card>
            <Content>
            <ProfileImage data = {{
              name : facebookAnalyzing.name,
              image: facebookAnalyzing.photo_profile,
              headline: twitterAnalyzing.profileHeader
            }}/>
            <TopicProgramming data ={{
              isProgrammer
            }} />
            <ProfileUser data = {{
              githubProfile,
              facebookProfile,
              twitterProfile
            }}/>
            <ProgrammingExperience data={{
              contribution: githubAnalyzing.contribution,
              follower: githubAnalyzing.follower,
              following: githubAnalyzing.following,
              repo: githubAnalyzing.repo,
              stars : githubAnalyzing.stars,
              languages : githubAnalyzing.languages

            }}/>
            <SentimentAnalys
              data = {{
                positif: twitterAnalyzing.score.score.positif,
                netral: twitterAnalyzing.score.score.netral,
                negatif: twitterAnalyzing.score.score.negatif,
              }}
            />
            <Experience
              data = {{
                experiences: facebookAnalyzing.experiences
              }}
            />
            <Favorites
              data = {{
                fav: facebookAnalyzing.favorites
              }}
            />
            </Content>
          </Card>
        </Container>
      );
    } else {
      return <View />
    }

  }
}
