import Cookies from 'js-cookie'
import Config from '@/settings'

const TokenKey = Config.TokenKey

export function getToken() {
  // return Cookies.get(TokenKey)
  if (localStorage.easyweb) {
    return JSON.parse(localStorage.easyweb).token
  }
  return null
}

export function getUserInfo() {
  const user = JSON.parse(localStorage.easyweb).login_user
  if (user) {
    return JSON.parse(user)
  }
  return {}
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    return Cookies.set(TokenKey, token, { expires: Config.tokenCookieExpires })
  } else return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
