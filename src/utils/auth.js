import Cookies from 'js-cookie'
import Config from '@/settings'

const TokenKey = Config.TokenKey

export function getToken() {
  // return Cookies.get(TokenKey)
  return JSON.parse(localStorage.easyweb).token || null
}

export function getUserInfo() {
  // return Cookies.get(TokenKey)
  return JSON.parse(JSON.parse(localStorage.easyweb).login_user) || null
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    return Cookies.set(TokenKey, token, { expires: Config.tokenCookieExpires })
  } else return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
