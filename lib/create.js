/**
 * Create a SgToken instance
 * @function create
 * @returns {SgGuard} - Created instance
 */
'use strict'

const SgGuard = require('./sg_guard')

/** @lends create */
function create (...args) {
  return new SgGuard(...args)
}

module.exports = create
