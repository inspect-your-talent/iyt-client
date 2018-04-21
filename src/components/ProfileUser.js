import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, Icon, ListItem } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    const {
      githubProfile,
      facebookProfile,
      twitterProfile
    } = this.props.data
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db", marginBottom: 32,}}>Profile</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <FontAwesome name="twitter" />
            </Left>
            <Body>
              <Text>twitter.com/{twitterProfile}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="facebook" />
            </Left>
            <Body>
              <Text>facebook.com/{facebookProfile}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="github" />
            </Left>
            <Body>
              <Text>github.com/{githubProfile}</Text>
            </Body>
          </ListItem>
       </Content>
    );
  }
}
