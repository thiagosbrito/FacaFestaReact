import React , { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.Splash}>
        <View style={styles.LogoContainer}>
          <Image source={require('./src/images/logo-grande.png')} style={styles.Logo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Splash: {
    backgroundColor: '#8e44ad',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LogoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  Logo: {
    width: 110,
    height: 200
  },
  Title: {
    fontSize: 36,
    fontFamily: 'AmaticSC-Regular'
  }
});
