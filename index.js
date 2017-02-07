import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Splash from './Splash';
import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import {Scene, Router} from 'react-native-router-flux';

export default class FacaFesta extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('FacaFesta', () => FacaFesta);
