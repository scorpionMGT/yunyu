import { combineReducers } from 'redux'
import { homeReducer } from './home'
import { userReducer } from './user'
import { adminReducer } from './admin'
import { todoListReducer } from './todolist'

const rootReducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    admin: adminReducer,
    todolist: todoListReducer
})

export default rootReducer
