import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, ListItem, Right } from 'native-base'

export default class TopicProgramming extends Component {
  render() {
    const {isProgrammer} = this.props.data
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Programing Experiences</Text>
          </Separator>

          {
            isProgrammer.map(data => {
              return (
                <ListItem icon>
                  <Left>
                    <Text>{data.word}</Text>
                  </Left>
                  <Body>
                    <Text></Text>
                  </Body>
                  <Right>
                    <Text>{data.count}</Text>
                  </Right>
                </ListItem>
              )
            })
          }
       </Content>
    );
  }
}
