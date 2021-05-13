import React, { useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from 'react-native'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme'
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
])

export default function App() {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}