import React, { Component } from 'react'
import { connect } from 'react-redux'

class PeopleList extends Component {
  static propTypes = {}
  render() {
    return (
      <div>
        {this.props.people
          .valueSeq()
          .toArray()[0]
          .map((person) => (
            <li key={person.email}>
              {person.firstName} {person.lastName} {person.email}
            </li>
          ))}
      </div>
    )
  }
}
export default connect((state) => ({
  people: state.people
}))(PeopleList)
