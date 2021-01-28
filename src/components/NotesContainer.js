import React from 'react'
import { connect } from 'react-redux'
import NoteCard from './NoteCard'
import { fetchNotes } from '../actions/notes'

class NotesContainer extends React.Component {
  
  componentDidMount(){
    if(!this.props.currentUser){
      this.props.history.push('/login')
    }
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

export default connect (mapStateToProps, null) (NotesContainer)