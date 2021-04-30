import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image 
        resizeMode='contain'
        source={require('../assets/chair.jpg')}
        style={styles.image} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 25,
    left: 30
  },
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 25,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})