import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'

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
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 25,
    left: 30
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecfc4',
    position: 'absolute',
    top: 25,
    right: 30
  }
})