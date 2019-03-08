import React, { Component } from 'react'
import DeckForm from './DeckForm'
import { Button, View, Text } from 'react-native'

class AddDeck extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter deck name</Text>

        <DeckForm navigation={this.props.navigation}/>

      </View>
    );
  }
}

export default AddDeck
