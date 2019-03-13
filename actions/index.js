export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const INITIALIZE_DECKS = 'INITIALIZE_DECKS'
export const INITIALIZE_SCORE = 'INITIALIZE_SCORE'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const WRONG_ANSWER = 'WRONG_ANSWER'
export const UPDATE_NEXT_ID = 'UPDATE_NEXT_ID'
export const UPDATE_STUDIED = 'UPDATE_STUDIED'

export function createNewDeck (id, name) {
  return {
    type: ADD_DECK,
    id,
    name
  }
}

export function createQuestion (id, question) {
  return {
    type: ADD_QUESTION,
    id,
    question
  }
}

export function updateNextId (id) {
  return {
    type: UPDATE_NEXT_ID,
    id
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

export function updateStudiedStatus() {
  return {
    type: UPDATE_STUDIED
  }
}
