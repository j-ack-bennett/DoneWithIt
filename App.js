import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from "@react-navigation/native"
import { LogBox } from 'react-native'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import NavigationTheme from './app/navigation/NavigationTheme'
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library",
])

export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  if (!isReady)
    return (
      <AppLoading 
        startAsync={restoreUser} 
        onFinish={() => setIsReady(true)} 
        onError={console.warn} 
      />
    )

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}