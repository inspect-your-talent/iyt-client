import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, ListItem } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Favorites</Text>
          </Separator>
          <ListItem icon>
            <Left>
              {/* <FontAwesome name="graduation-cap" /> */}
            </Left>
            <Body>
              <Text>The SpongeBob SquarePants Movie</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              {/* <FontAwesome name="graduation-cap" /> */}
            </Left>
            <Body>
              <Text>Its better to have a few true friends than lots of fake friends</Text>
            </Body>
          </ListItem>
       </Content>
    );
  }
} 

