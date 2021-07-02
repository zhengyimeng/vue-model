/**
 * action
 */
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_USER_BALANCE = 'SET_USER_BALANCE'

/**
 * action creator
 */
export function setUserInfo(username) {
  return {
    type: SET_USER_INFO,
    payload: {
      username
    }
  }
}

export function setUserBalance(balance) {
  return {
    type: SET_USER_BALANCE,
    payload: balance
  }
}
