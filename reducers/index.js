import { ADD_DECK, ADD_QUESTION, INITIALIZE_DECKS } from '../actions'

function deck (state={}, action) {
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        decks: [
          ...state.decks,
          {
            id: 1,
            name: action.name,
            questions: []
          }
        ]
      }
    case ADD_QUESTION :
      return {
        ...state,
        ...action.question
      }

    case INITIALIZE_DECKS :
      return {
        ...state,
        'decks': []
      }
    default :
      return state
  }
}

export default deck
