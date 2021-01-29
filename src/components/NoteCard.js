import React from 'react'
import { connect } from 'react-redux'
// import { Button, Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { showCard } from '../actions/showCard'


class NoteCard extends React.Component {

  handleShowCard = (note) => {
    this.props.showCard(note)
  }


  render(){
    return(
      <div>
        <div className="ui cards">
          <div className="ui card">
            <div className="content">
              <div className="header">{this.props.title}</div>
              <div className="meta">{this.props.subject}</div>
              <div className="description">{this.props.content}</div>
            </div>
            <div className="extra content">
              <div className="ui buttons">
                <Link to={`/notes/${this.props.id}`}>
                  <button className="ui blue inverted button" onClick={() => this.handleShowCard(this.props)}>View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  showCard: showCard
}

export default connect (null, mapDispatchToProps) (NoteCard)