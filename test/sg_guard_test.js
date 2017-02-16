/**
 * Test case for sgGuard.
 * Runs with mocha.
 */
'use strict'

const SgGuard = require('../lib/sg_guard.js')
const assert = require('assert')
const injectmock = require('injectmock')
const co = require('co')

describe('sg-guard', function () {
  this.timeout(3000)

  before(() => co(function * () {
    injectmock(global, 'window', {
      localStorage: {
        getItem () {

        },
        setItem () {

        }
      },
      prompt () {
        return 'foo'
      },
      document: {
        write () {

        }
      }
    })
  }))

  after(() => co(function * () {
    injectmock.restoreAll()

  }))

  it('Sg guard', () => co(function * () {
    assert.equal(new SgGuard('foo').ask(), true)
    assert.equal(new SgGuard('bar').ask(), false)
  }))
})

/* global global, describe, before, after, it */
