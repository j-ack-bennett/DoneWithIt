import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from 'react-native'

import AppNavigator from './app/navigation/AppNavigator'
import NavigationTheme from './app/navigation/NavigationTheme'
import OfflineNotice from './app/components/OfflineNotice';

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
])

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}