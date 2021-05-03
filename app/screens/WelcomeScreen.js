import React from 'react'
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native'

import AppButton from '../pages/AppButton'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')} 
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' />
        <AppButton title='Register' color='secondary' />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
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
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }
})