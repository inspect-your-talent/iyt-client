import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Profile from './src/screens/Profile'
import store from './src/redux/store';
import Home from './src/screens/Home';
import CameraCV from './src/screens/CameraCV';
import WaitingUploadCv from './src/screens/WaitingUploadCv';
import Login from './src/screens/Login';
import ListCandidates from './src/screens/ListCandidates';
import DetailCandidate from './src/screens/DetailCandidate';

const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Summary',
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  Login: {
    screen: Login
  },
  CameraCV: {
    screen: CameraCV
  },
  WaitingUploadCv: {
    screen: WaitingUploadCv
  },
  ListCandidates: {
    screen: ListCandidates
  },
  DetailCandidate: {
    screen: DetailCandidate,
    navigationOptions: {
      headerTitle: 'Summary',
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: '300'
      },
    },
  }
}, {
  initialRouteName: 'Home',
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
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
