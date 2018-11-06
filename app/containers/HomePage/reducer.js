/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_USERNAME, DATA_LOAD_REQUEST, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  data: []
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));

    case DATA_LOAD_REQUEST:
      return state.set('loading',true);

    case DATA_LOAD_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading',false)

    case DATA_LOAD_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
