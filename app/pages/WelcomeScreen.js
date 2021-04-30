import React from 'react'
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native'

import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary
  }
})