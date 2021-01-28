import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import currentUserReducer from './currentUserReducer';
import showCardReducer from './showCardReducer'
import editNoteReducer from './editNoteReducer';

export default combineReducers({
  currentUser: currentUserReducer,
  notes: notesReducer,
  showCard: showCardReducer,
  editNote: editNoteReducer
});