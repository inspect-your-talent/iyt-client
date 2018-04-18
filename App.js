import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginLinkedin from './src/components/LoginLinkedin'
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import store from './src/redux/store';


const RootStack = StackNavigator({
  Home: {
    screen: Home
  }
}, {
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store= { store } >
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
