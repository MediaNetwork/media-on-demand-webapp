import { combineReducers } from 'redux'
import createReducer from 'state/helpers/create-reducer'

import * as types from './types'

export default combineReducers({
  projects: createReducer(null)({
    [types.FETCH_COMPLETED]: (state, action) => action.payload.projects,
  })
})