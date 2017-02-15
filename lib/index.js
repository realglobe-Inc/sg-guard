/**
 * Simple quick auth
 * @module sg-guard
 */

'use strict'

const create = require('./create')
const SgGuard = require('./sg_guard')

let lib = create.bind(this)

Object.assign(lib, , {
  create,
  SgGuard
})

module.exports = lib
