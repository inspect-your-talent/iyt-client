import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, Icon, ListItem, Right } from 'native-base'
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
          <ListItem icon>
            <Left>
              <FontAwesome name="twitter" />
            </Left>
            <Body>
              <Text style={{fontSize:16}}>twitter.com/{twitterProfile}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="facebook" />
            </Left>
            <Body>
              <Text style={{fontSize:16}}>facebook.com/{facebookProfile}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <FontAwesome name="github" />
            </Left>
            <Body>
              <Text style={{fontSize:16}}>github.com/{githubProfile}</Text>
            </Body>
          </ListItem>
       </Content>
    );
  }
}
