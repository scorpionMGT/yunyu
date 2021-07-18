import { combineReducers } from 'redux'
import { homeReducer } from './home'
import { userReducer } from './user'
import { adminReducer } from './admin'
import { todoListReducer } from './todolist'
import { commonReducer } from './common'

const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  admin: adminReducer,
  todolist: todoListReducer,
  common: commonReducer,
})

export default rootReducer
