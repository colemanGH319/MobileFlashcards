
import { combineReducers } from 'redux'
import {
        ADD_DECK,
        ADD_QUESTION,
        INITIALIZE_DECKS,
        CORRECT_ANSWER,
        WRONG_ANSWER,
        UPDATE_NEXT_ID,
        INITIALIZE_SCORE
      } from '../actions'


function decks (state={}, action) {
  switch (action.type) {
    case ADD_DECK :

      return {
          ...state,
          [action.id] : {
            deckId: action.id,
            name: action.name,
            questions: [],
            nextId: 0
          }
        }
    case ADD_QUESTION :
      return {
        ...state,
        [action.id] : {
          ...state[action.id],
          questions: [...state[action.id].questions, action.question]
        }
      }

    case UPDATE_NEXT_ID :
      return {
        ...state,
        [action.id] : {
          ...state[action.id],
          nextId: state[action.id].nextId + 1
        }
      }
    default :
      return state
  }
}

function score (state={}, action) {
  switch(action.type) {
    case CORRECT_ANSWER :
      return {
          correct: state.correct + 1,
          tries: state.tries + 1
      }

    case WRONG_ANSWER :
      return {
        ...state,
        tries: state.tries + 1
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
