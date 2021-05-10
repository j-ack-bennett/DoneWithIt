import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator'
import NavigationTheme from './app/navigation/NavigationTheme'
import AppNavigator from './app/navigation/AppNavigator'

// const Link = () => {
//   const navigation = useNavigation()

//   return (
//     <Button title='Click' onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
//   )
// }

// const Tweets = () => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Link />
//   </Screen>
// )

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>Tweet Details {route.params.id}</Text>
//   </Screen>
// )

// const Stack = createStackNavigator()

// const FeedNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: {backgroundColor: 'dodgerblue'},
//       headerTintColor: 'white',
//     }}
//   >
//     <Stack.Screen 
//       name='Tweets' 
//       component={Tweets} 
//       options={{
//         headerStyle: {backgroundColor: 'tomato'},
//         headerTintColor: 'white',
//         headerShown: false
//       }}
//     />
//     <Stack.Screen 
//       name='TweetDetails' 
//       component={TweetDetails} 
//       options={({ route }) => ({ title: route.params.id })}
//     />
//   </Stack.Navigator>
// )

// const Account = () => <Screen><Text>Account</Text></Screen>

// const Tab = createBottomTabNavigator()

// const TabNavigator = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor: 'tomato',
//       activeTintColor: 'white',
//       inactiveBackgroundColor: '#eee',
//       inactiveTintColor: 'black'
//     }}
//   >
//     <Tab.Screen 
//       name='Feed' 
//       component={FeedNavigator} 
//     />
//     <Tab.Screen name='Account' component={Account} />
//   </Tab.Navigator>
// )

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}