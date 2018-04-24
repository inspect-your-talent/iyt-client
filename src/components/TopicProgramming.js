import React, { Component } from 'react';
import { Text, Body, Content, Left, Separator, ListItem, Right } from 'native-base'
import PieChart from 'react-native-pie-chart';
import { AppRegistry, StyleSheet, ScrollView , StatusBar,View } from 'react-native';


export default class TopicProgramming extends Component {
  render() {
    let topTopic;
    const {isProgrammer} = this.props.data
    if(isProgrammer.length < 5){
      topTopic = isProgrammer.slice(0, isProgrammer.length)
    }else{
      topTopic = isProgrammer.slice(0, 5)
    }
    const chart_wh = 250
    const sliceColor = ['#66BB6A','#26C6DA','#FFA726','#AB47BC','#FF7043']

    const seriesArr = []
    if(topTopic.length<5){
      for (let i=0; i<topTopic.length; i++){
        seriesArr.push(topTopic[i].count)
      }
    }else{
      for (let i=0; i<5; i++){
        seriesArr.push(topTopic[i].count)
      }
    }

    let sliceColorArr = []
    if(topTopic.length < 5){
      for (let i=0; i<topTopic.length; i++){
        sliceColorArr.push(sliceColor[i])
      }
    }else{
      sliceColorArr = ['#66BB6A','#26C6DA','#FFA726','#AB47BC','#FF7043']
    }

    return (
      <Content>
          <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
              <StatusBar
                hidden={true}
              />
              <Text style={styles.title}>Word about programming found on social media</Text>
              <PieChart
                chart_wh={chart_wh}
                series={seriesArr}
                sliceColor={sliceColorArr}
              />
            </View>

            <View style={{flex: 1, justifyContent:'center', marginTop: 24, marginLeft:40}}>
            {
              topTopic.map((data, i) => {
                return (
                  <View style={styles.square}>
                    <View style={{width: 30, height: 30, backgroundColor: sliceColorArr[i], justifyContent:'center', alignItems:'center'}}>
                      <Text style={{color: '#fff'}}>{data.count}</Text>
                    </View>
                    <Text style={{marginLeft: 10, marginTop: 5}}>{data.word}</Text>
                  </View>
                )
              })
            }
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
