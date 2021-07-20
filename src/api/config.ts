/*
 * @Author: your name
 * @Date: 2019-12-11 09:46:22
 * @LastEditTime: 2019-12-16 12:29:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yunyu-app\src\api\config.ts
 */
// export const baseURL = 'http://116.62.5.104:7001'
// export const baseURL = 'http://127.0.0.1:7001'

interface Header {
  'Content-Type': string
  version: string
  signature: string
  Authorization?: string
}

export const headers: Header = {
  'Content-Type': 'application/json',
  version: '1.0.0',
  signature: 'yunyu2021',
  // platform: '2',
  // channel: '2',
  // languageFlag: '0'
}
