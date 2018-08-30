import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class AddPersonForm extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h3>Person Form</h3>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            First name: <Field name="firstName" component="input" />
          </div>
          <div>
            Last name: <Field name="lastName" component="input" />
          </div>
          <div>
            Email: <Field name="email" component="input" />
          </div>
          <button type="submit">Add person</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'person'
})(AddPersonForm)
