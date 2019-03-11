import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { withNavigationFocus } from 'react-navigation'
import { createQuestion } from '../actions'

class DeckDetails extends React.Component {

  state = {
    questions: this.props.questions,
    lastId: 0
  }

  handleNewQuestion = (id, question) => {
    this.props.dispatch(createQuestion(id, question))
  }

  unsubscribe = store.subscribe(() => {
    this.state.questions = store.getState().decks[this.props.deck.deckId].questions
    this.forceUpdate()
  })

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    const { deck, questions } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{`Title: ${deck.name}`}</Text>
        <Text>{`Cards: ${this.state.questions.length}`}</Text>
        <Button
          title="Add Question"
          onPress={() => this.props.navigation.navigate('AddCard', {
            id: deck.deckId,
            lastId: this.state.lastId,
            incrementId: () => {
              this.setState((prevState) => ({ lastId: prevState.lastId + 1 }))}
          })}
        />
        <Button
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz', {
            questions: this.state.questions
          })}
        />
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {

  const { deck } = navigation.state.params
  const { questions } = deck
  return {
    deck,
    questions
  }
}

export default connect(mapStateToProps)(DeckDetails)
