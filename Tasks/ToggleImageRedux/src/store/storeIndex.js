
import { createStore } from 'redux'
import toggleReducer from '../reducers/reducerIndex';

 const store = createStore(toggleReducer)

 export default store