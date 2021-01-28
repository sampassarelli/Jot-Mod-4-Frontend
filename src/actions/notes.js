
export const submitNewNote = (newNote) => {
  return {
    type: 'NEW_NOTE',
    note: newNote
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    id: id
  }
}

export const updateNote = (updatedNote) => {
  return {
    type: 'UPDATE_NOTE',
    note: updatedNote
  }
}