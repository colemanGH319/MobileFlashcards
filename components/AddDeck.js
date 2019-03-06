import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createNewDeck } from '../actions'
import { Button, View, Text } from 'react-native'

class AddDeck extends React.Component {

  state = {
    value: ''
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add New Deck!</Text>

        <Form id="newDeck">
          <Input type="text" value={this.state.value} placeholder="Deck Name"/>
        </Form>

        <Button
          title='Add Deck'
          onPress={() => this.props.dispatch(createNewDeck('Deck 1'))}
        />
      </View>
    );
  }
}

export default connect()(AddDeck)
