import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { shuffle, clearLocalNotification,
  setLocalNotification } from '../utils/helpers'
import { initializeScore, scoreAnswer, updateStudiedStatus } from '../actions'

class Quiz extends Component {

  state = {
    currentIndex: 0,
    showAnswer: false,
    showMarkButtons: true,
    remaining: this.props.shuffledQuestions.length
  }

  componentDidMount() {
    this.props.dispatch(initializeScore())
    this.updateActivityStatus()
  }

  handleMarkButton = (isCorrect) => {
    this.props.dispatch(scoreAnswer(isCorrect))
    this.setState((prevState) => ({
      showMarkButtons: false,
      remaining: prevState.remaining - 1
    }))
  }

  handleReset = () => {
    this.setState({
      currentIndex: 0,
      showAnswer: false,
      showMarkButtons: true,
      remaining: this.props.shuffledQuestions.length
    })
    this.props.dispatch(initializeScore())
  }

  updateActivityStatus () {
    if (this.props.hasStudied === true) {
      return
    } else {
      this.props.dispatch(updateStudiedStatus())
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  render() {
    const { shuffledQuestions, score } = this.props
    const currentQuestion = shuffledQuestions[this.state.currentIndex]

    if (shuffledQuestions.length === 0) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Your deck doesn't have any cards. Add cards to the deck before starting the quiz.</Text>
        </View>
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Quiz!</Text>
        <Text>{`Question: ${currentQuestion === undefined ? 'Complete' : currentQuestion.text}`}</Text>
        <Text>{this.state.showAnswer ? `Answer: ${currentQuestion.answer}` : ''}</Text>
        {this.state.remaining > 0
          ? <Text>{`Questions Remaining: ${this.state.remaining}`}</Text>
          : <Text>{`Final Score: ${score.correct}/${score.tries}`}</Text>
          }
        {currentQuestion !== undefined
          ? <Button
            title="Show Answer"
            onPress={() => this.setState((prevState) => ({showAnswer: !prevState.showAnswer}))}
            />
          : (null)
        }

        {this.state.showMarkButtons
          ? (
              <View>
                <Button
                  title="Mark Correct"
                  onPress={() => this.handleMarkButton(true)}
                />
                <Button
                  title="Mark Incorrect"
                  onPress={() => this.handleMarkButton(false)}
                />
              </View>
          )
          : this.state.currentIndex < shuffledQuestions.length - 1 ?
            <Button
              title="Next Question"
              onPress={() => this.setState((prevState) => ({
                currentIndex: prevState.currentIndex + 1,
                showAnswer: false,
                showMarkButtons: true
              }))}
            />
            : <Button
                title="Return to Deck"
                onPress={() => this.props.navigation.goBack()}
              />
        }
        <Button
          title="Restart Quiz"
          onPress={this.handleReset}
        />
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }){
  const { questions } = navigation.state.params
  const shuffledQuestions = shuffle(questions)
  const { score, hasStudied } = state
  return {
    shuffledQuestions,
    score,
    hasStudied
  }
}

export default connect(mapStateToProps)(Quiz)
