import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'


class Login extends Component {
    
  render() {
    return (
    <div className="login">
      <Form className="login-form">

        <h1 id="flatnote-header">Welcome to FLATNOTE</h1>

        <Form.Field label="User Login / Signup" placeholder="Username" control="input" name="username"/>
        <Button primary type='submit'>Login</Button>
               
      </Form> 
    </div>    
    )
  }
}

export default Login