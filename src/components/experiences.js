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
        {
          experiences.map(exp => {
            return (
              <ListItem icon>
                <Left>
                  <MaterialIcons name="work" />
                </Left>
                <Body style={{flexDirection:'row'}}>
                  <Text style={{padding: 16, fontSize:16,flex: 1, flexWrap: 'wrap'}}>{ `${exp}` }</Text>
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
