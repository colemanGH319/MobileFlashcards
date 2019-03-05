import React from 'react';
import { Text, View } from 'react-native';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetails from './components/DeckDetails'
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  Details: {
    screen: DeckDetails,
  }
})

const TabNavigator = createBottomTabNavigator(
  {
    'Decks': DeckList,
    'New Deck': AddDeck,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Decks') {
          iconName = 'ios-filing'
        } else if (routeName === 'New Deck') {
          iconName = 'ios-add-circle-outline'
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(TabNavigator);
