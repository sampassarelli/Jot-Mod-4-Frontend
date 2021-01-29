const editNoteReducer = (state = null, action) => {
  switch(action.type) {
    case 'EDIT_NOTE':
    case 'UPDATE_NOTE':
      return action.note
    case 'LOGOUT_USER': 
      return null
    default:
      return state
  }
}

export default editNoteReducer