import _ from 'lodash'
import { Action } from '../interface'

const commonState = {
  token: '',
}

export const commonReducer = (state = commonState, action: Action) => {
  let _state = _.clone(state)
  return { ..._state, token: action.token }
}
