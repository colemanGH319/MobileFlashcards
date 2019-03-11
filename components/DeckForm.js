import { Formik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { createNewDeck } from '../actions'
import { TextInput, Button, View, StyleSheet } from 'react-native'

const validate = ({ deckName }) => {
  const errors = {}
  if (deckName === undefined) {
    errors.deckName = 'Required'
  } else if (deckName.trim() === '') {
    errors.deckName = 'Must not be blank'
  }

  return errors
}

const DeckForm = ({...props}) => (

  <Formik
    onSubmit={(values, actions) => {
      props.dispatch(createNewDeck(values.deckName))
      actions.resetForm({})
      props.navigation.navigate('Home')
    }}
    validate={validate}
    render={({
      handleChange,
      handleSubmit,
      values: { deckName },
      isValid
    }) => (
      <View>
        <TextInput
          onChangeText={handleChange('deckName')}
          style={styles.rootInput}
          value={deckName}
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

const styles = StyleSheet.create({
  rootInput: {
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
});


export default connect()(DeckForm)
