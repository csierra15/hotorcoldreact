import { combineReducers } from 'redux'
import guess from './guessReducer'
import newGame from './newGameReducer'

const rootReducer = combineReducers({
  guess,
  newGame
})

export default rootReducer
