'use strict'

let testParameters = require('./../extra/parameters.json')
const mock = require('mock-require')

mock('./../../src/parameters.json', testParameters)

module.exports = async function () {
    // Put your code here
    return Promise. resolve()
}