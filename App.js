import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import WelcomeScreen from './app/pages/WelcomeScreen'
import ViewImageScreen from './app/pages/ViewImageScreen'
import Screen from './app/pages/Screen'
import ImageInput from './app/pages/ImageInput'

export default function App() {
  const [imageUri, setImageUri] = useState()

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) {
      alert('You need to enable permission to access the library.')
    }
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        setImageUri(result.uri)
      }
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }
  
  useEffect(() => {
    requestPermission()
  }, [])

  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
    // <ViewImageScreen />
  )
}