
export const fetchNotes = (notesArr) => {
  return {
    type: 'FETCH_NOTES',
    notes: notesArr
  }
}