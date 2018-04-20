import React, { Component } from 'react';
import { Text, Body, Content, Left,Separator, ListItem } from 'native-base'
import { View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class SentimentAnalys extends Component {
  render() {
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Sentiment Analys Result</Text>
          </Separator>
          <ListItem icon>
            <Left>
              {/* <FontAwesome name="birthday-cake" /> */}
            </Left>
            <Body>
              <Text>disini grafik</Text>
            </Body>
          </ListItem>
       </Content>
    );
  }
} 

const styles = StyleSheet.create({
  space: {
    paddingTop: 20,
  }
})