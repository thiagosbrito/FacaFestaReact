import React , { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar
} from 'react-native';
import { Button, Icon } from 'native-base';
export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          />
        <TextInput
          placeholder="Usuário ou E-mail"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput }
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          secureTextEntry
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          style={ styles.textInput } />
        <Button block style={styles.button}> Entrar </Button>
        <Button block style={styles.FacebookLoginButton}>
          Login com Facebook </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#fff',
    height: 40,
    width: 250,
    marginBottom: 10,
    borderRadius: 6,
    paddingHorizontal: 10
  },
  button: {
    marginBottom: 8
  },
  FacebookLoginButton: {
    backgroundColor: '#3F51B5'
  }
})
