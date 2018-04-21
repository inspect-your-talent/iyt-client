import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, ListItem } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  render() {
    const { fav}  = this.props.data
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Favorites</Text>
          </Separator>
          {
            fav.map(fav => {
              return (
                <ListItem icon>
                  <Left>
                    {/* <FontAwesome name="graduation-cap" /> */}
                  </Left>
                  <Body>
                    <Text>{ fav }</Text>
                  </Body>
                </ListItem>
              )
            })

          }

       </Content>
    );
  }
}
