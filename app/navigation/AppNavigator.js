import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountNavigator from './AccountNavigator'
import FeedNavigator from './FeedNavigator'
import ListingEditScreen from '../screens/ListingEditScreen'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={FeedNavigator} />
      <Tab.Screen name='ListingEdit' component={ListingEditScreen} />
      <Tab.Screen name='Account' component={AccountNavigator} />
    </Tab.Navigator>
  )
}