import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

import ListingEditScreen from './app/screens/ListingEditScreen'

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
    <ListingEditScreen />

    // <Screen>
    //   <Button title='Select Image' onPress={selectImage} />
    //   <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    //   <ImageInput imageUri={imageUri} />
    // </Screen>
  )
}