import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewDeck } from '../actions'
import { Button, View, Text } from 'react-native'

class AddDeck extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add New Deck!</Text>
        <Button
          title='Add Deck'
          onPress={() => this.props.dispatch(createNewDeck('NewDeck'))}
        />
      </View>
    );
  }
}

export default connect()(AddDeck)
