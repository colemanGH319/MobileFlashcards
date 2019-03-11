import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Button, View,
  Text, FlatList, TouchableOpacity } from 'react-native'

class DeckList extends Component {

  _keyExtractor = (item, index) => item.name

  _renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={() => this.props.navigation.navigate('Details',{
      deckId: item.deckId
    })}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{`${item.questions.length} cards`}</Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    const decks = Object.values(this.props.decks)
    const newArray = decks.map((deck) => {key: deck})
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={decks}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
  }
})

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
