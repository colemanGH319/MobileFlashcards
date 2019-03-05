import { ADD_DECK, ADD_QUESTION } from '../actions'

function deck (state={}, action) {
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        ...action.title
      }
    case ADD_QUESTION :
      return {
        ...state,
        ...action.question
      }
  }
}

export default deck
