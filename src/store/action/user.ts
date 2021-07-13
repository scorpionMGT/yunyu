import { Dispatch } from 'redux'
import { getUserInfo } from '../../api/user'

interface Params {
  type: string
  username: string
  userId: number
}

interface Func {
  (params?: any): any
}

export const setUserInfo = (params: Params) => {
  return {
    type: 'SET_USER_INFO',
    username: params.username,
    userId: params.userId,
  }
}

export const testSetUserInfo: Func = (params: any) => async (dispatch: Dispatch, getState: any) => {
  let data = await getUserInfo()
  return dispatch(setUserInfo(data.data))
}
