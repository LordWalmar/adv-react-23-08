import React, { Component, Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'
import AuthRoute from './routes/auth'
import AdminRoute from './routes/admin'
import PeopleRoute from './routes/people'
import PrivateRoute from './components/common/private-route'

class App extends Component {
  get menu() {
    return (
      <Fragment>
        <div>
          <NavLink to="/admin" activeStyle={{ color: 'red' }}>
            admin
          </NavLink>
        </div>
        <div>
          <NavLink to="/auth" activeStyle={{ color: 'red' }}>
            auth
          </NavLink>
        </div>
        <div>
          <NavLink to="/people" activeStyle={{ color: 'red' }}>
            People
          </NavLink>
        </div>
      </Fragment>
    )
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.menu}
        <PrivateRoute path="/admin" component={AdminRoute} />
        <Route path="/auth" component={AuthRoute} />
        <Route path="/people" component={PeopleRoute} />
      </div>
    )
  }
}

export default App
