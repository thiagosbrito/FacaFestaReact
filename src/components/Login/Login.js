import React , { Component } from 'react';
import { View, Text, StyleSheet, Image , KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.Login}>
        <View style={styles.LogoContainer}>
          <Image source={require('../../images/logo-grande.png')} style={styles.Logo} />
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  Login: {
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
  formContainer: {
    flexGrow: 1
  },
  Title: {
    fontSize: 36,
    fontFamily: 'AmaticSC-Regular'
  }
});
