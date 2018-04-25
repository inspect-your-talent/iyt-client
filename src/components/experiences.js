import React, { Component } from 'react';
import { Button, Text, Card, Body, Content, Left,Separator,
  Icon, Thumbnail, Right, CardItem, List, ListItem } from 'native-base'
import { View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class Experience extends Component {

  render() {
    const { experiences }  = this.props.data
    return (
      <Content style={{paddingTop:16}}>
        {
          experiences.map(exp => {
            return (
              <ListItem icon>
                <Left>
                  <MaterialIcons name="work" />
                </Left>
                <Body>
                  <Text style={{fontSize:14}}>{ `${exp}` }</Text>
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
