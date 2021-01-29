import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/auth'

class Login extends Component {
  state = {
    username: "testuser1",
    password: "test1",
    error: ""
  }  

  handleInputChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      if (data.error){
        this.setState({
          error: data.error
        })
      } else {
        localStorage.setItem('jwt_token', data.jwt_token)
        console.log("User Valid", data.user)
        this.props.loginSuccess(data.user)
        this.props.history.push('/notes')
      }
    })
  }

  render() {
    return (
    <div className="login">
      <div className="page-login">
      <h1 id="flatnote-header">Remember Your Dreams with JOT!</h1>
        <div className="ui centered grid container">
          <div className="nine wide column">
           { this.state.error ? <div className="ui icon warning message">
                <i className="lock icon"></i>
                <div className="content">
                  <div className="header">
                    Login failed!
                  </div>
                  <p>Please Check Your Username or Password!</p>
                </div>
            </div> 
            :
            null }
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
                  <button className="ui primary labeled icon inverted button" type="submit" disabled={!this.state.username || !this.state.password}>
                    <i className="unlock alternate icon"></i>
                    Login
                  </button>
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

const mapDispatchToProps = {
  loginSuccess: loginSuccess
}


export default connect (null, mapDispatchToProps) (Login)