import React from 'react'
import { connect } from 'react-redux'
import { Button, Card} from 'semantic-ui-react'

class NoteCard extends React.Component {
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
              <div className="ui two buttons">
                <button className="ui blue basic button">View</button>
                {/* <button className="ui red basic button">Delete</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoteCard