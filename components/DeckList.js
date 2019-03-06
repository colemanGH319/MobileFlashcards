import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewDeck, initializeDecks } from '../actions'
import { StyleSheet, Button, View, Text, FlatList } from 'react-native'

class DeckList extends Component {

  state = {
    decks: [
      {
        id: 1,
        questions: ['a', 'b'],
      },
      {
        id: 2,
        questions: ['c', 'd'],
      }
    ],
    questions: {
      'a': {},
      'b': {},
      'c': {},
      'd': {}
    }
  }

  componentDidMount() {
    this.props.dispatch(initializeDecks('Deck 1'))
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={[{key: 'Deck 1'}, {key: 'Deck 2'}, {key: 'Deck 3'}]}
          renderItem={({item}) => <Text style={styles.title}>{item.key}</Text>}
        />
        <Button
          title='Details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title='Show Props'
          onPress={() => console.log(this.props)}
        />
        <Button
          title='Callback'
          onPress={() => this.props.dispatch(createNewDeck('Deck 4'))}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40,
  }
})

function mapStateToProps({ decks }) {
  return {
    decks: decks,
  }
}

export default connect(mapStateToProps)(DeckList)
