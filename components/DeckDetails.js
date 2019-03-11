import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { withNavigationFocus } from 'react-navigation'
import { createQuestion } from '../actions'

class DeckDetails extends React.Component {

  state = {
    lastId: 0
  }

  handleNewQuestion = (id, question) => {
    this.props.dispatch(createQuestion(id, question))
  }

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    const { deckId, name, questions } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{`Title: ${name}`}</Text>
        <Text>{`Cards: ${questions.length}`}</Text>
        <Button
          title="Add Question"
          onPress={() => this.props.navigation.navigate('AddCard', {
            id: deckId,
            lastId: this.state.lastId,
            incrementId: () => {
              this.setState((prevState) => ({ lastId: prevState.lastId + 1 }))}
          })}
        />
        <Button
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz', {
            questions: questions
          })}
        />
        <Button
          title="Log Props"
          onPress={() => console.log(this.props)}
        />
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {

  const { deckId } = navigation.state.params.deck
  const { name, questions } = state.decks[deckId]
  return {
    deckId,
    name,
    questions
  }
}

export default connect(mapStateToProps)(DeckDetails)
