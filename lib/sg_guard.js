/**
 * @class SgGuard
 * @param {string} password - Password
 * @param {Object} [options={}] - Optional settings
 * @param {string} [options.questionText] - Text for question
 * @param {string} [options.errorText] - Text for error
 * @param {string} [options.storageKey] - Key for local stroage
 */
'use strict'

const sha1 = require('sha1')
const { save, restore } = require('bstorage')
const { get } = require('bwindow')

/** @lends SgGuard */
class SgGuard {
  constructor (password, options = {}) {
    const s = this
    if (!password) {
      throw new Error('[SgGuard] password is required!')
    }
    let {
      questionText = 'Password?',
      errorText = 'Authentication Failed',
      storageKey = '@@sg-guard/ask',
      encrypted = false
    } = options
    s._hash = encrypted ? password : sha1(String(password).trim())
    s._questionText = questionText
    s._errorText = errorText
    s._storageKey = storageKey
  }

  ask () {
    const s = this
    const prompt = get('prompt')
    const document = get('document')
    const localStorage = get('localStorage')

    const OK_VALUE = 'ok'

    let supported = prompt && localStorage
    if (!supported) {
      throw new Error('[SgGuard] Not supported!')
    }

    let alreadyAuthorized = restore(s._storageKey) === OK_VALUE
    if (alreadyAuthorized) {
      return true
    }

    let input = prompt(s._questionText)
    let ok = s._hash === sha1(String(input).trim())
    if (ok) {
      save(s._storageKey, OK_VALUE)
      return true
    } else {
      console.error(s._errorText)
      document.write(`<p style="color: #E11; margin: 50px; font-size: 12px;"><h3>${s._errorText}</h3></p>`)
      return false
    }
  }

  save () {
  }

}

module.exports = SgGuard
