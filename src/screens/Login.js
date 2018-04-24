import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import LoginFacebook from '../components/LoginFacebook';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Welcome',
    headerLeft: null
  }

  render() {
    return (
      <View style={ styles.container } >
        <View style={styles.componentFB}>
          <LoginFacebook
            navigation={this.props.navigation} />
        </View>
        <View style={styles.imageBanneLogin}>
          <Image source={require('../assets/img/loginBanner.jpg')}
            style={{ width: '100%', height: 145 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#FFF'
  },
  imageBanneLogin: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  componentFB: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '30%',
  }
})
