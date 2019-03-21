import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers/Reducers'
import thunk from 'redux-thunk'

const store = createStore(Reducers, applyMiddleware(thunk))

export default store