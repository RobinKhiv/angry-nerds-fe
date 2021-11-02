import jwtDecode from 'jwt-decode'
import config from '../config'

let _timeoutId
const _TEN_SECONDS_IN_MS = 10000

const JwtService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },

  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },

  hasAuthToken() {
    return !!JwtService.getAuthToken()
  },

  parseJwt(jwt) {
    return jwtDecode(jwt)
  },

  parseAuthToken() {
    const authToken = JwtService.getAuthToken()
    if (authToken)
      return JwtService.parseJwt(authToken)
    else
      return undefined
  },

  _getMsUntilExpiry(payload) {
    return (payload.exp * 1000) - Date.now()
  },

  queueCallbackBeforeExpiry(callback) {
    const msUntilExpiry = JwtService._getMsUntilExpiry(
      JwtService.parseAuthToken()
    )
    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS)
  },

  clearCallbackBeforeExpiry() {
    clearTimeout(_timeoutId)
  }
}

export default JwtService;
