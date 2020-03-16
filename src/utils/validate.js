/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validateUsername(rule, value, callback) {
  if (value.length <= 0) {
    callback(new Error('The username can not be empty'))
  } else {
    callback()
  }
}

export function validatePassword(rule, value, callback) {
  if (value.length < 6) {
    callback(new Error('The password can not be less than 6 digits'))
  } else {
    callback()
  }
}
