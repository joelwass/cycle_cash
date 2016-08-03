import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
const logo = require('../assets/images/CycleCash.jpg');

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  trackYourMiles = () => {
    console.log('track your miles');
    this.props.navigator.push({ name:'TrackYourMiles' });
  }

  pedalPoints = () => {
    console.log('pedal points');
    this.props.navigator.push({ name:'PedalPoints' });
  }

  spendPoints = () => {
    console.log('spend points');
    this.props.navigator.push({ name:'SpendPoints' });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            resizeMode={'contain'}
            style={styles.logoImage}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.cycleCashTitle}>
            CycleCash
          </Text>
          <TouchableHighlight style={styles.homePageButtons}
            onPress={this.trackYourMiles}>
            <Text style={styles.button}>
              Track Your Miles
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.homePageButtons}
            onPress={this.pedalPoints}>
            <Text style={styles.button}>
              Pedal Points
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.homePageButtons}
            onPress={this.spendPoints}>
            <Text style={styles.button}>
              Spend Points
            </Text>
          </TouchableHighlight>
          <View style={styles.paddingBottom}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    backgroundColor: '#c1e6e8',
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
    flex: 1,
  },
  logoImage: {
    width: 300,
    height: 300,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  paddingBottom: {
    flex: 4,
  },
  cycleCashTitle: {
    flex: 2,
    color: 'white',
    fontSize: 38,
  },
  homePageButtons: {
    flex: 1,
  },
  button: {
    color: 'white',
    fontSize: 18,
  }
});
