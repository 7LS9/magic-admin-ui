import request from '@/utils/request'

export function loginVerify(data) {
  return request({
    url: '/api/v1/practice/login_verify',
    method: 'post',
    data
  })
}
export function register(data) {
  return request({
    url: '/api/v1/practice/register',
    method: 'post',
    data
  })
}
