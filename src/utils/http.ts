import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8099',
  withCredentials: true,
  timeout: 7000
})

// 请求拦截器
instance.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse) => response, (error) => Promise.reject(error));

export default instance