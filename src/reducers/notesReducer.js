const notesReducer = (state = [], action) => {
  let updatedNotes;

  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return action.user.notes
    case 'NEW_NOTE':
      return [...state, action.note]
    case 'UPDATE_NOTE':
      updatedNotes = state.map(n => n.id === action.note.id ? action.note : n)
      return updatedNotes
    case 'DELETE_NOTE':
      updatedNotes = state.filter(note => note.id !== action.id)
      return updatedNotes
    default:
      return state
  }
}

export default notesReducer