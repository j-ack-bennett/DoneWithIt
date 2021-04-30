import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'

import WelcomeScreen from './pages/WelcomeScreen'

export default function App() {
  return (
    <WelcomeScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
