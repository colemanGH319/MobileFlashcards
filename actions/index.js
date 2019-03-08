export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const INITIALIZE_DECKS = 'INITIALIZE_DECKS'
export const INITIALIZE_SCORE = 'INITIALIZE_SCORE'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const WRONG_ANSWER = 'WRONG_ANSWER'

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

export function initializeScore () {
  return {
    type: INITIALIZE_SCORE
  }
}

export function scoreAnswer (isCorrect) {
  if (isCorrect) {
    return {
      type: CORRECT_ANSWER
    }
  } else {
    return {
      type: WRONG_ANSWER
    }
  }
}
