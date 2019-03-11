import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { createQuestion } from '../actions'

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
    const { navigation } = this.props
    const id = navigation.getParam('id', 'NO ID')
    const { lastId } = navigation.state.params
    return(
      <Formik
        onSubmit={(values, actions) => {
          this.props.dispatch(createQuestion(id, { ...values, qid: lastId }))
          navigation.state.params.incrementId()
          navigation.goBack()
        }}
        validate={this.validate}
        render={({
          handleChange,
          handleSubmit,
          values: { text, answer },
          isValid
        }) => (
          <View>
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
            <Button
              title="show Id"
              onPress={() => console.log('Next Id', lastId)}
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


export default connect()(AddCard)
