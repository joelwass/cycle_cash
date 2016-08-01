import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class TrackYourMiles extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.container}>
        <View
          style={styles.topBar}>
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

  },
  topBar: {

  },
  distnceBlock: {

  },
  durationAndSpeedBlock: {

  },
  durationBlock: {

  },
  speedBlock: {

  },
  stopStartBlock: {

  },
  adBlock: {

  },
});
