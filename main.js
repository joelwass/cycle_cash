import React from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';
import HomePage from './screens/homePage';

class AppContainer extends React.Component {

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'HomePage', index: 0 }}
        renderScene={(route, navigator) =>
          <HomePage/>
        }
      />
    );
  }
}

AppRegistry.registerComponent('main', () => AppContainer);
