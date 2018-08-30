import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../ducks/people'
import PersonForm from '../components/people/add-person-form'
import PeopleList from '../components/people/people-list'

class PeopleRoute extends Component {
  static propTypes = {}
  render() {
    return (
      <div>
        <PeopleList />
        <h2>Add new person</h2>
        <PersonForm onSubmit={this.props.addPerson} />
      </div>
    )
  }
}
export default connect(
  null,
  { addPerson }
)(PeopleRoute)
