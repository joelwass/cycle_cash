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

export default class PedalPoints extends React.Component {

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
          <View style={styles.trackYourMilesTitle}>
            <Text style={styles.trackYourMilesText}>
              Track Your Miles
            </Text>
          </View>
          <TouchableHighlight style={styles.hamburgerButton}
            onPress={this.goHome}>
            <Image source={hamburger} />
          </TouchableHighlight>
        </View>

        <View
          style={styles.pointsContainer}>
          <Text style={styles.pointsNumber}>
            55
          </Text>
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
  pointsContainer: {

  },
  pointsNumber: {

  },
  adBlock: {

  },
});
