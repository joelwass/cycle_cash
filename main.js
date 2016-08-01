import React from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
const logo = require('./assets/images/CycleCash.jpg');

class AppContainer extends React.Component {
  componentWillMount() {

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
          <TouchableHighlight style={styles.homePageButtons}>
            <Text style={styles.button}>
              Track Your Miles
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.homePageButtons}>
            <Text style={styles.button}>
              Pedal Points
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.homePageButtons}>
            <Text style={styles.button}>
              Spend Points
            </Text>
          </TouchableHighlight>
          <View style={styles.paddingBottom}/>
        </View>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('main', () => AppContainer);
