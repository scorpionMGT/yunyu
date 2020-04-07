import _ from 'lodash'
import { Action } from '../interface'

const homeState = {
    homeName: 'yunyu',
    zone: 1,
    department: 'yuntu',
    job: 'web',
    remark: 'hello world'
}

export const homeReducer = (state = homeState, action: Action) => {
    let _state = _.clone(state)
    return _state
}
