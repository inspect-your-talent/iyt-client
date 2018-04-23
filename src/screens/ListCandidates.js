import React, { Component } from 'react';
import {  View,  Button, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import axios from '../axios';
import { connect } from 'react-redux'


class ListCandidates extends Component {

    state = {
      candidates: []
    }
    
    fetchData = () => {
      const {id} = this.props
      axios.get(`/candidates/${id}`).then(res => {
        this.setState({
          candidates: res.data.data
        })
      }).catch(err => console.log(err))
    }

    componentDidMount() {
      this.fetchData()
    }

    render() {
      const { candidates} = this.state
      console.log(candidates)
      return (
        <Container>
          <Content>
            <List>
            {
              candidates.map((candidate, i) => {
                return (
                  <TouchableOpacity
                    key={ i }
                    onPress={
                      () => {
                        console.log('kebuka')
                        this.props.navigation.navigate('DetailCandidate',{
                          id: candidate.id
                        })
                      }
                    }
                  >
                    <ListItem avatar style={{padding: 16}}>
                      <Left>
                        <Thumbnail source={{ uri: candidate.facebookAnalyzing.photo_profile }} />
                      </Left>
                      <Body>
                        <Text>{ candidate.facebookAnalyzing.name}</Text>
                        <Text note>{ candidate.twitterAnalyzing.profileHeader}</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                  </TouchableOpacity>
                )
              })
            }

            </List>
          </Content>
        </Container>
      );
    }
}

const mapStateToProps = state => {
  return {
    id: state.reducer.fb_id
  }
}

export default connect(mapStateToProps, null)(ListCandidates)
