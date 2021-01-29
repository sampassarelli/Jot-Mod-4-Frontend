const showCardReducer = (state = null, action) => {
  switch(action.type) {
    case 'SHOW_CARD':
    case 'UPDATE_NOTE':
      return action.note
    case 'LOGOUT_USER': 
      return null
    default:
      return state
  }
}

export default showCardReducer