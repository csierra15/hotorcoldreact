import { createStore } from 'redux'
import guess from './reducers/guess'

const store = createStore(guess, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
