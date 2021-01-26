import React from 'react'
import { connect } from 'react-redux'
import NoteCard from './NoteCard'
import { fetchNotes } from '../actions/notes'

class NotesContainer extends React.Component {
  
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(resp => resp.json())
    .then(notesArr => {
      this.props.fetchNotes(notesArr)
    })
  }

  render(){
    return(
      <div className="noteContainer">
      {
        this.props.notes.map(noteObj => <NoteCard {...noteObj} key={noteObj.id}/>)
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = {
  fetchNotes: fetchNotes
}

export default connect (mapStateToProps, mapDispatchToProps) (NotesContainer)