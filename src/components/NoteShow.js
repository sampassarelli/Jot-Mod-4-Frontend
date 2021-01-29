import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editNote } from '../actions/editNote'
import { deleteNote } from '../actions/notes'

class NoteShow extends React.Component{

  componentDidMount(){
    if(!this.props.showCard){
      // this.props.match.params.id - grabs id and do fetch based on this ID
    }
  }

  handleEditNote = (note) => {
    this.props.editNote(note)
  }


  handleDelete = (id) => {
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(deletedNote => {
      this.props.deleteNote(id)
      this.props.history.push('/notes')
    })
  }


  render(){
    // create a loading store state that is loading and toggle it and wait for the fetch to come back and change it from showLoading is false to change it back to the rest of the render
    const note = this.props.showCard
    console.log(note.id)
    return(
      <div className="note-show">
        <div className="note-show">
          <h2 id="flatnote-header">In This Dream...</h2>
          <div className="ui centered grid container">
            <div className="nine wide column">
            
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form">
                  <div className="field">
                    <h2>{note.title}</h2>
                  </div>
                  <div className="field">
                    <h3>{note.subject}</h3>
                  </div>
                  <div className="field">
                    <p>{note.content}</p>
                  </div>
                  <Link to='/notes'>
                    <button className="ui blue inverted button" >Back to Jots</button>
                  </Link>
                  <Link to={`/notes/${note.id}/edit`}>
                    <button className="ui primary inverted button" onClick={() => this.handleEditNote(note)}>Edit</button>
                  </Link>
                  <Link to='/notes'>
                    <button className="ui red inverted button" onClick={() => this.handleDelete(note.id)}>Delete</button>
                  </Link>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showCard: state.showCard

  }
}

const MapDispatchToProps = {
  deleteNote: deleteNote,
  editNote: editNote
}

export default connect(mapStateToProps, MapDispatchToProps) (NoteShow)