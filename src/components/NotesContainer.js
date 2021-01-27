import React from 'react'
import { connect } from 'react-redux'
import NoteCard from './NoteCard'
import { fetchNotes } from '../actions/notes'

class NotesContainer extends React.Component {
  
  componentDidMount(){
    if(!this.props.currentUser){
      this.props.history.push('/login')
    }
    // fetch("http://localhost:3000/api/v1/notes")
    // .then(resp => resp.json())
    // .then(notesArr => {
    //   this.props.fetchNotes(notesArr)
    // })
  }

  renderNotes = () => {
    return this.props.notes.map(noteObj => <NoteCard {...noteObj} key={noteObj.id}/>)
  }

  render(){
    return(

      <div className="noteContainer">
        {this.renderNotes()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    currentUser: state.currentUser
  }
}

// const mapDispatchToProps = {
//   fetchNotes: fetchNotes
// }

export default connect (mapStateToProps, /*mapDispatchToProps*/) (NotesContainer)