import React, { Component } from 'react';
import { Text, Thumbnail, View, Card, CardItem, Content,  Separator, Icon, Left, Body, ListItem, Right } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    const { name, image, headline, githubProfile,
      facebookProfile,
      twitterProfile } = this.props.data
    return (
      <Content>
        <View style={{flex: 1, justifyContent:'flex-start', alignItems:'center', padding: 36 }}>
          <Thumbnail large source={{ uri: image }} />
          <Text style={{fontSize:20, paddingTop:16}}>{ name }</Text>
          <Text style={{fontSize:14, paddingTop:8}}>{ headline }</Text>
        </View>
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
