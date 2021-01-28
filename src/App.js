import './App.css';
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import NotesContainer from'./components/NotesContainer'
import Login from './components/Login'
import NoteShow from './components/NoteShow'
import NewNote from './components/NewNote'
import NoteEdit from './components/NoteEdit'

class App extends React.Component {
  componentDidMount(){
    if(!this.props.currentUser){
      this.props.history.push('/login')
    }
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path ='/notes' component={NotesContainer} />
            <Route exact path ='/notes/new' component={NewNote}/>
            <Route exact path ='/notes/:id' component={NoteShow} />
            <Route exact path ='/notes/:id/edit' component={NoteEdit} />
            <Route path ='/login' component={Login} />
          </Switch> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect (mapStateToProps, null) (withRouter(App));
