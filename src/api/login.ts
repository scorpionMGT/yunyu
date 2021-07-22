/*
 * @Author: your name
 * @Date: 2019-12-12 18:05:43
 * @LastEditTime: 2019-12-16 17:43:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yunyu-app\src\api\user.ts
 */
import instance from './default'

interface Params {
  username: string
  password: string
  [propName: string]: any
}

export function login(params: Params) {
  return instance.post('/api/login', params)
}

export function register(params: Params) {
  return instance.post('/api/register', params)
}
