import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckDetails from './components/DeckDetails'
import Quiz from './components/Quiz'
import {Ionicons} from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
 } from 'react-navigation';

store = createStore(reducer)

const HomeStack = createStackNavigator({
  Home: {
    screen: DeckList
  },
  Details: {
    screen: DeckDetails
  },
  Quiz: {
    screen: Quiz
  },
  AddCard: {
    screen: AddCard
  },
  AddDeck: {
    screen: AddDeck
  }
})

const tabParams = [{
    'Decks': HomeStack,
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
}]

const TabNavigator = Platform.OS === 'ios'
                      ? createBottomTabNavigator(...tabParams)
                      : createMaterialTopTabNavigator(...tabParams);


const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {

  render() {
      return(
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      )
  }
}
