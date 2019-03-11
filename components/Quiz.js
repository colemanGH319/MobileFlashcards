import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { shuffle } from '../utils/helpers'
import { initializeScore, scoreAnswer } from '../actions'

class Quiz extends Component {

  state = {
    currentIndex: 0,
    showAnswer: false,
    showMarkButtons: true
  }

  componentDidMount() {
    this.props.dispatch(initializeScore())
  }

  handleMarkButton = (isCorrect) => {
    this.props.dispatch(scoreAnswer(isCorrect))
    this.setState({showMarkButtons: false})
  }

  render() {
    const { questions, score } = this.props
    const currentQuestion = questions[this.state.currentIndex]
    return (
      <View>
        <Text>Quiz!</Text>
        <Text>{`Question: ${currentQuestion === undefined ? 'Complete' : currentQuestion.text}`}</Text>
        <Text>{this.state.showAnswer ? currentQuestion.answer : ''}</Text>
        <Text>{`Score: ${score.correct}/${score.tries}`}</Text>
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
          : this.state.currentIndex < questions.length - 1 ?
            <Button
              title="Next Question"
              onPress={() => this.setState((prevState) => ({currentIndex: prevState.currentIndex + 1, showAnswer: false}))}
            />
            : <Button
                title="Finish Quiz"
                onPress={() => console.log("Finishing quiz")}
              />
        }
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }){
  const { questions } = navigation.state.params
  const score = state.score
  return {
    questions,
    score
  }
}

export default connect(mapStateToProps)(Quiz)
