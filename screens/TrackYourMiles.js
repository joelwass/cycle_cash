import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native';
const hamburger = require('../assets/images/menu.png');

export default class TrackYourMiles extends React.Component {

  constructor(props) {
    super(props);
  }

  goHome = () => {
    console.log('going home');
    this.props.navigator.pop();
  }

  render() {
    return (
      <View
        style={styles.container}>

        <View
          style={styles.topBar}>
          <TouchableHighlight style={styles.hamburgerButton}
            onPress={this.goHome}>
            <Image source={hamburger} />
          </TouchableHighlight>
          <View style={styles.trackYourMilesTitle}>
            <Text style={styles.trackYourMilesText}>
              Track Your Miles
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.distanceNumber}>54</Text>
          <Text style={styles.distanceLabel}>Distance (miles)</Text>
        </View>
        <View
          style={styles.distanceBlock}>
        </View>
        <View
          style={styles.durationAndSpeedBlock}>
          <View
            style={styles.durationBlock}>
          </View>
          <View
            style={styles.speedBlock}>
          </View>
        </View>
        <View
          style={styles.stopStartBlock}>
        </View>
        <View
          style={styles.adBlock}>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    backgroundColor: '#c1e6e8',
  },
  hamburgerButton: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 20,
    top: 6,
  },
  trackYourMilesText: {
    fontSize: 28,
    color: 'white',
  },
  trackYourMilesTitle: {
    flex: 1,
    alignItems: 'center',
  },
  topBar: {
    flex: 1,
    marginTop: 26,
    flexDirection: 'row',
  },
  distanceBlock: {
    flex: 2,
  },
  distanceNumber: {
    fontSize: 64,
    textAlign: 'center',
    color: 'white',
  },
  distanceLabel: {
    top: 10,
    textAlign: 'center',
    color: 'white',
  },
  durationAndSpeedBlock: {
    flex: 1,
  },
  durationBlock: {

  },
  speedBlock: {

  },
  stopStartBlock: {
    flex: 1,
  },
  adBlock: {

  },
});
