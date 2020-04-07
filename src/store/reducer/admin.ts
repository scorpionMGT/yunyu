import _ from 'lodash'
import { Action } from '../interface'

const adminState = {
    adminName: 'admin_mgt',
    zone: 1,
    department: 'yuntu',
    job: 'web',
    remark: 'hello world'
}

export const adminReducer = (state = adminState, action: Action) => {
    let _state = _.clone(state)
    return _state
}
