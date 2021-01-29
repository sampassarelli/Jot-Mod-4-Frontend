import './App.css';
import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from './actions/auth'
import NavBar from './components/NavBar'
import NotesContainer from'./components/NotesContainer'
import Login from './components/Login'
import NewUser from './components/NewUser'
import NoteShow from './components/NoteShow'
import NewNote from './components/NewNote'
import NoteEdit from './components/NoteEdit'

class App extends React.Component {
  componentDidMount(){
    const token = localStorage.getItem('jwt_token')

    if (!token) {
      this.props.history.push('/login')
    } else {
      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.props.currentUser(data.user)
      })
    }
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
          <Switch>
            {/* <Route exact path ='/notes' render={(routeParams) => { !this.props.authUser ? <Redirect to="/login"/> : <NotesContainer {...routeParams}/>}} /> */}

            <Route exact path ='/notes' component={NotesContainer} />
            <Route exact path ='/notes/new' component={NewNote}/>
            <Route exact path ='/notes/:id' component={NoteShow} />
            <Route exact path ='/notes/:id/edit' component={NoteEdit} />
            <Route exact path ='/signup' component={NewUser} />
            <Route path ='/login' component={Login} />
          </Switch> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.currentUser
  }
}

const mapDispatchToProps = {
  currentUser: currentUser
}

export default connect (mapStateToProps, mapDispatchToProps) (withRouter(App));
