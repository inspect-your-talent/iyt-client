import React, { Component } from 'react';
import { Button } from 'react-native';
import { Text, Body, Content, Left, Separator, ListItem } from 'native-base'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends Component {
  state = {
    showmore: false
  }
  render() {
    const { fav}  = this.props.data
    const {showmore} = this.state
    return (
      <Content>
        {
          !showmore ?
          fav.slice(0,9).map(fav => {
            return (
              <ListItem icon>
                <Left>
                  {/* <FontAwesome name="graduation-cap" /> */}
                </Left>
                <Body>
                  <Text style={{fontSize:16}}>{ fav }</Text>
                </Body>
              </ListItem>
            )
          }) :
          fav.map(fav => {
            return (
              <ListItem icon>
                <Left>
                  {/* <FontAwesome name="graduation-cap" /> */}
                </Left>
                <Body>
                  <Text style={{fontSize:16}}>{ fav }</Text>
                </Body>
              </ListItem>
            )
          })
        }

        {
          showmore ?
            <Button
            title = "show less"
            onPress = {
              () => {
                this.setState({
                  showmore: false
                })
              }
            }
            /> :
            <Button
            title = "show more"
            onPress = {
              () => {
                this.setState({
                  showmore: true
                })
              }
            }
            />
        }
       </Content>
    );
  }
}
