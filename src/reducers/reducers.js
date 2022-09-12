import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
const appReducer = combineReducers({
  homeReducer
})
export default appReducer;