import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { createQuestion, updateNextId } from '../actions'

class AddCard extends Component {

  validate = ({ text, answer }) => {
    const errors = {}
    if (text === undefined) {
      errors.text = 'Required'
    } else if (text.trim() === '') {
      errors.text = 'Must not be blank'
    } else if (answer === undefined) {
      errors.answer = 'Required'
    } else if (answer.trim() === '') {
      errors.answer = 'Must not be blank'
    }

    return errors
  }

  render () {
    const { navigation, nextId } = this.props
    const id = navigation.getParam('id', 'NO ID')
    return(
      <Formik
        onSubmit={(values, actions) => {
          this.props.dispatch(createQuestion(id, { ...values, qid: nextId }))
          this.props.dispatch(updateNextId(id))
          navigation.goBack()
        }}
        validate={this.validate}
        render={({
          handleChange,
          handleSubmit,
          values: { text, answer },
          isValid
        }) => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              onChangeText={handleChange('text')}
              style={styles.rootInput}
              placeholder="Enter question"
              value={text}
            />
            <TextInput
              onChangeText={handleChange('answer')}
              style={styles.rootInput}
              placeholder="Enter answer"
              value={answer}
            />
            <Button
              title="Submit"
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      />
    )

  }
}

const styles = StyleSheet.create({
  rootInput: {
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
});

function mapStateToProps({ decks }, { navigation }) {
  const { id } = navigation.state.params
  const deck = decks[id]
  return {
    nextId: deck.nextId
  }
}

export default connect(mapStateToProps)(AddCard)
