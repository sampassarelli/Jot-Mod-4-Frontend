export const showCard = (note) => {
  return {
    type: 'SHOW_CARD',
    note: note
  }
}

export const updateNote = (updatedNote) => {
  return {
    type: 'UPDATE_NOTE',
    note: updatedNote
  }
}