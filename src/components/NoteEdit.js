import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateNote } from '../actions/notes'


class NoteEdit extends React.Component {
  state = {
    title: this.props.note.title,
    subject: this.props.note.subject,
    content: this.props.note.content
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        subject: this.state.subject,
        content: this.state.content
      })
    }
    fetch(`http://localhost:3000/api/v1/notes/${this.props.note.id}`, reqObj)
    .then(resp => resp.json())
    .then(updatedNote => {
      console.log(updatedNote)
      this.props.updateNote(updatedNote)
      this.props.history.push(`/notes/${this.props.note.id}`)
    })
  }

  render(){

    return(
      <div className="note-edit">
        <div className="page-login">
          <h1 id="flatnote-header">Update this Jot!</h1>
          <div className="ui centered grid container">
            <div className="nine wide column">
            
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange}/>
                  </div>
                  <div className="field">
                    <label>Subject</label>
                    <input type="text" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleInputChange} />
                  </div>
                  <div className="field">
                    <label>Jot it Down</label>
                    <textarea type="text" name="content" placeholder="Jot it" value={this.state.content} onChange={this.handleInputChange} row="4"/>
                  </div>
                  <button className="ui blue inverted button" type="submit" disabled={!this.state.title || !this.state.subject || !this.state.content}>Update</button>
                  <Link to={`/notes/${this.props.note.id}`}>
                    <button className="ui red inverted button" >Cancel</button>
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
    note: state.editNote
  }
}

const MapDispatchToProps = {
  updateNote: updateNote
}

export default connect (mapStateToProps, MapDispatchToProps) (NoteEdit)