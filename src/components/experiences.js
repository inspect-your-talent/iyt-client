import React, { Component } from 'react';
import { Button, Text, Card, Body, Content, Left,Separator,
  Icon, Thumbnail, Right, CardItem, List, ListItem } from 'native-base'
import { View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class Experience extends Component {

  render() {
    const { experiences }  = this.props.data
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Experiences</Text>
          </Separator>
          {
            experiences.map(exp => {
              return (
                <ListItem icon>
                  <Left>
                    <MaterialIcons name="work" />
                  </Left>
                  <Body>
                    <Text>{ exp }</Text>
                  </Body>
                </ListItem>
              )
            })

          }

       </Content>
    );
  }
}


const styles = StyleSheet.create({
  space: {
    paddingTop: 20,
  }
})
