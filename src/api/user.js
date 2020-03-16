import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/accounts/login/',
    method: 'post',
    data: data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/accounts/users/',
    method: 'get',
    params: { 'access_token': token }
  })
}

export function logout() {
  return request({
    url: '/api/accounts/logout/',
    method: 'post'
  })
}
