import React from 'react'
import { Link } from 'react-router-dom'

class NewUser extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch(`http://localhost:3000/users`, reqObj)
    .then(resp => resp.json())
    .then(newUser => {
      console.log(newUser)
    })
  }
  
  render(){
    return(
      <div className="new-user">
        <div className="new-note">
        <div className="page-login">
          <h1 id="flatnote-header">Create Your New Account</h1>
          <div className="ui centered grid container">
            <div className="nine wide column">
            
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name={'username'} placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input type="password" name={'password'} placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                  </div>
                  <button className="ui blue inverted button" type="submit" disabled={!this.state.username || !this.state.password}>Create Account</button>
                  <Link to='/login'>
                    <button className="ui red inverted button" >Cancel</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default NewUser