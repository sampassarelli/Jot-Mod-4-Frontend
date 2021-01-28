import React from 'react'
import { connect } from 'react-redux'
import { submitNewNote } from '../actions/notes'
import { Link } from 'react-router-dom'

class NewNote extends React.Component {
  state = {
    title: '',
    subject: '',
    content: '',
  }
  
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        title: this.state.title,
        subject: this.state.subject,
        content: this.state.content
      })
    }
    fetch('http://localhost:3000/api/v1/notes', reqObj)
    .then(resp => resp.json())
    .then(data => {
      this.props.submitNewNote(data)
      this.props.history.push('/notes')
    })
  }

  componentDidMount(){
    if(!this.props.currentUser){
      this.props.history.push('/login')
    }
  }

  render(){
    return(
      <div className="new-note">
        <div className="page-login">
          <h1 id="flatnote-header">Jot Down Anything!</h1>
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
                  <button className="ui blue inverted button" type="submit" disabled={!this.state.title || !this.state.subject || !this.state.content}>Add</button>
                  <Link to='/notes'>
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
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  submitNewNote: submitNewNote
}

export default connect (mapStateToProps, mapDispatchToProps) (NewNote)