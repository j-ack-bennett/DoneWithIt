import React, { useEffect, useState } from 'react'
import { Button, Image, Text, TextInput, View, Switch } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppButton from './app/components/AppButton'
import AppPicker from './app/components/AppPicker'
import AppText from './app/components/AppText'
import AppTextInput from './app/components/AppTextInput'
import Card from './app/components/Card'
import Icon from './app/components/Icon'
import ImageInput from './app/components/ImageInput'
import ListItem from './app/components/ListItem'
import ListingsScreen from './app/components/ListingsScreen'
import Screen from './app/components/Screen'
import AccountScreen from './app/screens/AccountScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 }
]

export default function App() {
  const [category, setCategory] = useState(categories[0])
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
      <AppPicker 
        items={categories}
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon='apps' 
        placeholder='Category' 
      />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>

    // <Screen>
    //   <Button title='Select Image' onPress={selectImage} />
    //   <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    //   <ImageInput imageUri={imageUri} />
    // </Screen>
  )
}