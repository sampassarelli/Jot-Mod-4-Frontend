import React from 'react'
import { connect } from 'react-redux'



class NewNote extends React.Component {
  state = {
    title: '',
    category: '',
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
        title: this.state.title,
        category: this.state.category,
        content: this.state.content,
      })
    }
    fetch('http://localhost:3000/api/v1/notes', reqObj)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
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
                  <button className="ui primary button" type="submit">Add</button>
                  <button className="ui primary button" type="submit">Cancel</button>
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

}

export default connect (mapStateToProps, null) (NewNote)