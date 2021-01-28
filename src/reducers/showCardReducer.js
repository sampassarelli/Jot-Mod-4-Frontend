const showCardReducer = (state = null, action) => {
  switch(action.type) {
    case 'SHOW_CARD':
    case 'UPDATE_NOTE':
      return action.note
    default:
      return state
  }
}

export default showCardReducer