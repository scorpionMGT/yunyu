import axios, { AxiosInstance } from 'axios'
import { baseURL, headers } from './config'
const instance: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: { ...headers },
    timeout: 1000
})

instance.interceptors.request.use(
    (config) => {
        // 发送请求前做什么
        Object.assign(config.headers, { 'Content-Type': 'application/json' })
        return config
    },
    (error) => {
        console.log('error', error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        // 对响应数据做点事
        console.log('response', response)
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance
