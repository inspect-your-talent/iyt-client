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
import { connect } from 'react-redux'
import { View } from 'react-native'

class Profile extends Component {

  static navigationOptions = {
    headerLeft: null
  }

  render() {
    console.log('ini isi result ', this.props.result)
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
          <Button
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
            danger
            full
          >
            <Text> Ignore </Text>
          </Button>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Home')
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
  }
}

export default connect(mapStateToProps, null)(Profile)
