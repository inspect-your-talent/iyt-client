import React, { Component } from 'react';
import { Body, Content, Left,Separator, ListItem, Right } from 'native-base'
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class SentimentAnalys extends Component {
  render() {
    const { positif, negatif, netral} = this.props.data
    const chart_wh = 250
    const sliceColor = ['#F44336','#2196F3','#FFEB3B']
    const series = [negatif, positif, netral]
    return (
      <Content>
        <Left>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <StatusBar
              hidden={true}
            />
            <Text style={styles.title}>Sentiment analysis result</Text>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
            />
          </View>
        </ScrollView>
        </Left>
        <Right>
          <View style={{padding: 16}}>
            <Text> Biru: Positif</Text>
            <Text> Merah: Negatif</Text>
            <Text> Kuning: Netral</Text>
          </View>
        </Right>
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
