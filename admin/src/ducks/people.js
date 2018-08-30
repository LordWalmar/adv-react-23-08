import { appName } from '../config'
import { Record, List } from 'immutable'
import { reset } from 'redux-form'
/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PERSON = `${prefix}/ADD_PERSON`
/**
 * Reducer
 * */
const ReducerState = Record({
  people: new List([])
})
const PersonRecord = Record({
  firstName: null,
  lastName: null,
  email: null
})
export default function reducer(state = new ReducerState(), action) {
  const { type, payload } = action
  switch (type) {
    case ADD_PERSON:
      return state.update('people', (people) =>
        people.push(new PersonRecord(payload.person))
      )
    default:
      return state
  }
}
/**
 * Selectors
 * */

/**
 * Action Creators
 * */
export function addPerson(person) {
  return (dispatch) => {
    console.log('person', person)
    dispatch({
      type: ADD_PERSON,
      payload: { person }
    })
    dispatch(reset('person'))
  }
}
