import React from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import NavigationTheme from './app/navigation/NavigationTheme'
import AppNavigator from './app/navigation/AppNavigator'

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
])

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}