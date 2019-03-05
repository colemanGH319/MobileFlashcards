export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function createNewDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function createQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}
