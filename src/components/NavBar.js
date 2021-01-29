import React from 'react'
import { connect } from 'react-redux'
import { Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

class NavBar extends React.Component{

  handleClick = () => {
    this.props.logoutUser()
    localStorage.clear()
  }

  // handleLogout = () => {
  //   localStorage.clear()
  // }

  render(){
    return(
      <div className='navBar'> 
        {<Menu>
          <Menu.Item name='Home' as={Link} to='/notes'>Home</Menu.Item>
          <Menu.Item name='New Note' as={Link} to='/notes/new'>New Jot</Menu.Item>
          { 
            this.props.currentUser ? 
              <Menu.Item name='Logout' as={Link} to='/login' onClick = {this.handleClick}>Logout</Menu.Item>
              :
              <Menu.Item name='Login' as={Link} to='/login'>Login</Menu.Item>
          }
           {/* <div className='right menu'>
            <div className='item'>
            <div className='ui icon input'>
              <input
                type='text'
                placeholder='Search...'
                onChange={this.handleChange}
              />
              <i className='search link icon'></i>
            </div>
          </div>
          </div> */}
          {
            this.props.currentUser ? 
            <Input className='input right menu' icon='search' placeholder='Search...'></Input>
            :
            null
          }
        </Menu> }
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
  logoutUser: logoutUser
}

export default connect (mapStateToProps, mapDispatchToProps) (NavBar)