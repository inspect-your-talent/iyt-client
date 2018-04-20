import React, { Component } from 'react';
import { Button, Text, Card, Body, Content, Left,Separator,
  Icon, Thumbnail, Right, CardItem, List, ListItem } from 'native-base'
import { View, StyleSheet } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    return (
      <Content>
      <Card>
       <Thumbnail large source={{ uri: 'http://art.sdsu.edu/wp-content/uploads/2015/02/default-user-01.png' }} />
       <Text>Siti Rohimah</Text>
        <List>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Profile</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <FontAwesome name="birthday-cake" />
            </Left>
            <Body>
              <Text>29 Desember 1995</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="mobile-phone" />
            </Left>
            <Body>
              <Text>085798246233</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="twitter" />
            </Left>
            <Body>
              <Text>twitter.com/sitirohimahzha</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="facebook" />
            </Left>
            <Body>
              <Text>facebook.com/rohimahsiti</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="github" />
            </Left>
            <Body>
              <Text>github.com/srohimah</Text>
            </Body>
          </ListItem>
        </List>
      </Card>
       </Content>
    );
  }
} 

// experience
// github
// attitude

const styles = StyleSheet.create({
  space: {
    paddingTop: 20,
  }
})