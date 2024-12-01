import axios from 'axios'
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'

const axiosBlob = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  responseType: 'blob',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'image/png, image/jpeg, application/pdf',
  },
})

axiosBlob.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosBlob.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.data instanceof Blob) {
      try {
        const blobText = await new Response(error.response.data).text()
        const errorData = JSON.parse(blobText)
        return Promise.reject(
          new Error(errorData.data?.message || '에러가 발생했습니다.')
        )
      } catch {
        return Promise.reject(
          new Error('blob 데이터 처리 중 에러가 발생했습니다.')
        )
      }
    }
    return Promise.reject(new Error('에러가 발생했습니다.'))
  }
)

export default axiosBlob
