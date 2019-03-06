export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const INITIALIZE_DECKS = 'INITIALIZE_DECKS'

export function createNewDeck (name) {
  return {
    type: ADD_DECK,
    name
  }
}

export function createQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function initializeDecks () {
  return {
    type: INITIALIZE_DECKS
  }
}
