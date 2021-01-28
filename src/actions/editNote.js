export const editNote = (note) => {
  return {
    type: 'EDIT_NOTE',
    note: note
  }
}

export const updateNote = (updatedNote) => {
  return {
    type: 'UPDATE_NOTE',
    note: updatedNote
  }
}