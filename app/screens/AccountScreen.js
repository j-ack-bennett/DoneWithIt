import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItem from '../components/lists/ListItem'
import ListItemSeperator from '../components/lists/ListItemSeperator'
import routes from '../navigation/routes'
import Screen from '../components/Screen'

const menuItems = [
  { 
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  { 
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: routes.MESSAGES
  }
]

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem 
          title='Jack Bennett'
          subTitle='bennettjack44@gmail.com'
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList 
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem 
              title={item.title}
              IconComponent={
                <Icon 
                  name={item.icon.name} 
                  backgroundColor={item.icon.backgroundColor} 
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem 
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light
  }
})
