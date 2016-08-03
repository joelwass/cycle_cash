import React from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';
import HomePage from './screens/HomePage';
import TrackYourMiles from './screens/TrackYourMiles';
import PedalPoints from './screens/PedalPoints';
import SpendPoints from './screens/SpendPoints';

class AppContainer extends React.Component {

  renderScene = (route, navigator) => {
    if (route.name == 'HomePage') {
      return <HomePage navigator={navigator} />
    }
    if (route.name == 'TrackYourMiles') {
      return <TrackYourMiles navigator={navigator} />
    }
    if (route.name == 'PedalPoints') {
      return <PedalPoints navigator={navigator} />
    }
    if (route.name == 'SpendPoints') {
      return <SpendPoints navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'HomePage', index: 0 }}
        renderScene={ this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('main', () => AppContainer);
