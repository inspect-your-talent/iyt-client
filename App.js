import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Home from './src/screens/Home';
import CameraCV from './src/screens/CameraCV';


const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  CameraCV: {
    screen: CameraCV
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
