import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { withNavigationFocus } from 'react-navigation'
import { createQuestion } from '../actions'

class DeckDetails extends React.Component {

  handleNewQuestion = (id, question) => {
    this.props.dispatch(createQuestion(id, question))
  }

  render() {
    const { deckId, name, questions } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{`Title: ${name}`}</Text>
        <Text>{`${questions.length} cards`}</Text>
        <Button
          title="Add Question"
          onPress={() => this.props.navigation.navigate('AddCard', {
            id: deckId,
          })}
        />
        <Button
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz', {
            questions: questions
          })}
        />
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {

  const { deckId } = navigation.state.params
  const { name, questions } = state.decks[deckId]
  return {
    deckId,
    name,
    questions
  }
}

export default connect(mapStateToProps)(DeckDetails)
