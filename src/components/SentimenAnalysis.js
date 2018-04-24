import React, { Component } from 'react';
import { Body, Content, Left,Separator, ListItem, Right } from 'native-base'
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class SentimentAnalys extends Component {
  render() {
    const { positif, negatif, netral} = this.props.data
    const chart_wh = 250
    const sliceColor = ['#F44336','#2196F3','#9E9E9E']
    const series = [negatif, positif, netral]
    return (
      <Content>
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
          <View style={{flex: 1, justifyContent:'center', marginTop: 24, marginLeft:40}}>
            <View style={styles.square}>
              <View style={{width: 30, height: 30, backgroundColor: '#F44336', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: '#fff'}}>{negatif}</Text>
              </View>
              <Text style={{marginLeft: 10, marginTop: 5}}>Negatif</Text>
            </View>
            <View style={styles.square}>
              <View style={{width: 30, height: 30, backgroundColor: '#2196F3', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: '#fff'}}>{positif}</Text>
              </View>
              <Text style={{marginLeft: 10, marginTop: 5}}>Positif</Text>
            </View>
            <View style={styles.square}>
              <View style={{width: 30, height: 30, backgroundColor: '#9E9E9E', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: '#fff'}}>{netral}</Text>
              </View>
              <Text style={{marginLeft: 10, marginTop: 5}}>Netral</Text>
            </View>
          </View>
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
    fontSize: 16,
    marginTop: 20,
    padding: 10
  },
  square: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom : 5,
  },
});
