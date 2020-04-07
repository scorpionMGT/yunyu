import _ from 'lodash'
import { SET_USERINFO } from '../actionType'
import { Action } from '../interface'

const userState = {
    username: 'maoguotao',
    userId: '',
    zone: 1,
    account: '100',
    coupon: '20',
    remark: 'hello world'
}

export const userReducer = (state = userState, action: Action) => {
    let _state = _.clone(state)
    if (action.type === SET_USERINFO) {
        _state.username = action.username
        _state.userId = action.userId
    }
    return _state
}
