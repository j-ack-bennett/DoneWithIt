import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
      </View>
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
    position: 'absolute',
    top: 25,
    left: 30
  },
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  deleteIcon: {
    position: 'absolute',
    top: 25,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})