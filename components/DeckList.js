import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

export default class DeckList extends Component {

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deck List</Text>
        <Button
          title='Details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}
