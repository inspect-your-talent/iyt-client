import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, ListItem, Right } from 'native-base'

export default class Profile extends Component {
  render() {
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Programing Experiences</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Text>Contribution Per year </Text>
            </Left>
            <Body>
              <Text></Text>
            </Body>
            <Right>
              <Text>1299</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>Repositories</Text>
            </Left>
            <Body>
              <Text></Text>
            </Body>
            <Right>
              <Text>139</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>Stars</Text>
            </Left>
            <Body>
              <Text></Text>
            </Body>
            <Right>
              <Text>19</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>Followers</Text>
            </Left>
            <Body>
              <Text></Text>
            </Body>
            <Right>
              <Text>499</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>Following</Text>
            </Left>
            <Body>
              <Text></Text>
            </Body>
            <Right>
              <Text>57</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>Language</Text>
            </Left>
            <Body>
              <Text></Text>
            </Body>
            <Right>
              <Text style={{textAlign:"left"}}>Javascript, PHP, Python, HTML</Text>
            </Right>
          </ListItem>
       </Content>
    );
  }
} 

