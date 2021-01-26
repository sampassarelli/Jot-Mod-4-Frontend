import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
  render(){
    return(
      <div className='navBar'> 
        {<Menu>
          <Menu.Item
            name='Home'
            as={Link}
            to='/notes'
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='New Note'
            as={Link}
            to='/notes/new'
          >
            New Note
          </Menu.Item>

          <Menu.Item
            name='Sign Out'
            as={Link}
            to='/'
          >
            Sign Out
          </Menu.Item>
        </Menu> }
      </div>
    )
  }
}

export default NavBar