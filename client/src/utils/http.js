import axios from 'axios'

const http = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 5000
})

http.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config
    },
    error => {
        // 处理请求错误
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    response => {
        // 数据映射代码
        return response.data
    },
    error => {
        // 处理响应错误
        return Promise.reject(error)
    }
)

export default http
