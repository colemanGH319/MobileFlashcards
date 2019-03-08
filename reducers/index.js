import { combineReducers } from 'redux'
import {
        ADD_DECK,
        ADD_QUESTION,
        INITIALIZE_DECKS,
        CORRECT_ANSWER,
        WRONG_ANSWER,
        INITIALIZE_SCORE
      } from '../actions'
import generateUID from '../utils/createId'

function decks (state={}, action) {
  switch (action.type) {
    case ADD_DECK :
      const id = generateUID()
      return {
          ...state,
          [id] : {
            name: action.name,
            questions: []
          }
        }
    case ADD_QUESTION :
      return {
        ...state,
        ...action.question
      }

    case INITIALIZE_DECKS :
      return state
    default :
      return state
  }
}

function score (state={}, action) {
  switch(action.type) {
    case CORRECT_ANSWER :
      return {
        ...state,
        score: {
          correct: state.score.correct + 1,
          tries: state.score.tries + 1
        }
      }

    case WRONG_ANSWER :
      return {
        ...state,
        score: {
          ...state.score,
          tries: state.score.tries + 1
        }
      }
    case INITIALIZE_SCORE :
      return {
        correct: 0,
        tries: 0
      }
    default :
      return state
  }
}

export default combineReducers({
  decks, score
})
