import request from '@/utils/request'

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

export const isLogin = () => {
  return request({
    url: '/sys/isLogin',
    method: 'POST'
  })
}
