import React , { Component } from 'react';
import { View, Text, StyleSheet, Image , Dimensions, TouchableOpacity } from 'react-native';
import ImageHeader from 'react-native-image-header';

export default class Header extends Component {
  render() {
    return (
      <ImageHeader
        backgroundImage={backgroundImage}
        titleScale={titleScaleNum}
        titleTranslateY={titleTranslateY}
        minHeight={minHeightSize}
        maxHeight={maxHeightSize}
        statusBarTheme={statusBarThemeVar}
        headerChildren={
          <View style={styles.foregroundContainer}>
            <Image
              source={logo}
              style={styles.logo}
              resizeMode={Image.resizeMode.center}
            />
            <TouchableOpacity style={styles.addOrderButton}>
              <Text style={styles.plusButton}>+</Text>
            </TouchableOpacity>
          </View>
          }>
        <View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: '#f1c40f' }}>
          <Text>Content</Text>
        </View>
      </ImageHeader>
    );
  }
};

const backgroundImage = require('../../images/headerBackground.png');
const logo = require('../../images/logoHeader.png');
const titleScaleNum = 1;
const maxHeightSize = 250;
const minHeightSize = 90;
const titleTranslateY = -50;
const statusBarThemeVar = 'light-content';
const styles = StyleSheet.create({
  addOrderButton: {
    backgroundColor: '#3498db',
    width: 64,
    height: 64,
    borderRadius: 32,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    right: Dimensions.get('window').width / 2 - 118,
  },
  plusButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 48,
    marginBottom: 8,
    fontWeight: '700',
    alignItems: 'center'
  },
  logo: {
    width: 286,
    height: 151,
    marginHorizontal: 15
  },
  foregroundContainer: {
    width: Dimensions.get('window').width,
    height: 250,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    overflow: 'visible'
  },
  logoutButton: {
    position: 'absolute',
    top: 60,
    right: 15
  }
});
