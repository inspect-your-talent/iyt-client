import React, { Component } from 'react';
import { Body, Content, Left,Separator, ListItem } from 'native-base'
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class SentimentAnalys extends Component {
  render() {
    const chart_wh = 250
    const sliceColor = ['#F44336','#2196F3','#FFEB3B']
    const series = [0.33, 0.33, 0.33]
    return (
      <Content>
          <Separator bordered>
            <Text style={{fontSize:18, color:"#3498db"}}>Sentiment Analys Result</Text>
          </Separator>
            <Left>
              {/* <FontAwesome name="birthday-cake" /> */}
            </Left>
            <Body>
            <ScrollView style={{flex: 1}}>
              <View style={styles.container}>
                <StatusBar
                  hidden={true}
                />
                <Text style={styles.title}>Sentiment Analysis Result</Text>
                <PieChart
                  chart_wh={chart_wh}
                  series={series}
                  sliceColor={sliceColor}
                />
              </View>
            </ScrollView>
            </Body>
       </Content>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    margin: 10
  }
});
 