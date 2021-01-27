import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import currentUserReducer from './currentUserReducer';

export default combineReducers({
  currentUser: currentUserReducer,
  notes: notesReducer
});