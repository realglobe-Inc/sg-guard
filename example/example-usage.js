'use strict'

const sgGuard = require('sg-guard')

{
  const ThePassword = 'BigBigApple'

  let guard = sgGuard(ThePassword)

  // Ask use to input password
  let ok = guard.ask()
  if (!ok) {
    throw new Error('Auth failed!')
  }
}
