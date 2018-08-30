import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { authSelector } from '../../ducks/auth'

class PrivateRoute extends Component {
  render() {
    const { isAuthorized, component, ...props } = this.props
    console.log('isAuthorized', isAuthorized)
    console.log('props', props)
    return <Route {...props} render={this.getComponent} />
  }
  getComponent = () => {
    const { isAuthorized, ...props } = this.props
    return isAuthorized ? <Route {...props} /> : <h1>Not Authorized</h1>
  }
}
export default connect((state) => ({
  isAuthorized: authSelector(state)
}))(PrivateRoute)
