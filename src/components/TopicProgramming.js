import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, ListItem, Right } from 'native-base'
import PieChart from 'react-native-pie-chart';
import { AppRegistry, StyleSheet, ScrollView , StatusBar,View } from 'react-native';


export default class TopicProgramming extends Component {
  render() {
    const {isProgrammer} = this.props.data
    const topFiveTopic = isProgrammer.slice(0, 5            )
    const chart_wh = 250
    const sliceColor = ['#66BB6A','#26C6DA','#FFA726','#AB47BC','#FF7043']
    const series = [topFiveTopic[0].count, topFiveTopic[1].count, topFiveTopic[2].count, topFiveTopic[3].count ,topFiveTopic[4].count]

    return (
      <Content>
          <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
              <StatusBar
                hidden={true}
              />
              <Text style={styles.title}>Programming Topics</Text>
              <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
              />
            </View>
            <Right>
              <View style={{padding: 16}}>
                <Text> Hijau: {topFiveTopic[0].word}</Text>
                <Text> Biru: {topFiveTopic[1].word}</Text>
                <Text> Oranye: {topFiveTopic[2].word}</Text>
                <Text> Ungu: {topFiveTopic[3].word}</Text>
                <Text> Merah: {topFiveTopic[4].word}</Text>
              </View>
            </Right>
          </ScrollView>

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
