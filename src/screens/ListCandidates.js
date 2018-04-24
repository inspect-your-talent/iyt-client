import React, { Component } from 'react';
import {  View,  Button, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import axios from '../axios';
import { connect } from 'react-redux'
import Loading from '../components/Loading'


class ListCandidates extends Component {

    state = {
      candidates: [],
      loading: true
    }

    fetchData = () => {
      const {id} = this.props
      axios.get(`/candidates/${id}`).then(res => {
        console.log(res.data.data)
        this.setState({
          candidates: res.data.data,
          loading: false
        })
      }).catch(err => {
        this.setState({
          loading: false
        })
      })
    }

    componentDidMount() {
      this.fetchData()
    }

    render() {
      console.log(this.state)
      const { candidates, loading } = this.state
      console.log(candidates)
      if (loading){
        return (
          <Loading />
        )
      } else {
        if (candidates.length !== 0) {
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
                            <Text>{ candidate.facebookAnalyzing.name }</Text>
                            <Text note>{ candidate.twitterAnalyzing.profileHeader }</Text>
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
        } else {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
              <Text style={{ fontSize: 16}}>You have no any candidates yet</Text>
            </View>
          )
        }
      }
    }
}

const mapStateToProps = state => {
  return {
    id: state.reducer.fb_id
  }
}

export default connect(mapStateToProps, null)(ListCandidates)
