import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, ListItem, Right } from 'native-base'

export default class Profile extends Component {
  render() {
    const {repo, languages, stars, follower, following, contribution} = this.props.data
    const arrLanguage =  []
    languages.forEach(la => {
      if (arrLanguage.indexOf(la) === -1) {
        arrLanguage.push(la)
      }
    })

    return (
      <Content>
        <ListItem icon>
          <Left>
            <Text>Contribution Per year </Text>
          </Left>
          <Body>
            <Text></Text>
          </Body>
          <Right>
            <Text>{contribution}</Text>
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
            <Text>{repo}</Text>
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
            <Text>{stars}</Text>
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
            <Text>{follower}</Text>
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
            <Text>{following}</Text>
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
            <Text style={{textAlign:"left"}}>{ arrLanguage.join(', ')}</Text>
          </Right>
        </ListItem>
       </Content>
    );
  }
}
