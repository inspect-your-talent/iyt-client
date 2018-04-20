import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, Icon, ListItem } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    return (
      <Content>
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
              <MaterialCommunityIcons name="web" />
            </Left>
            <Body>
              <Text>srohimah.com</Text>
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
       </Content>
    );
  }
} 

