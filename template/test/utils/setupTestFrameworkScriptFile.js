'use strict'

process.setMaxListeners(0)

jest.mock('./../../src/parameters.json', () => {
    let parameters = Object.assign({}, require('../extra/parameters.json'))
    return parameters
})

beforeAll(() => {
    // Put your code here
    return Promise.resolve()
})

afterAll(() => {
    // Put your code here
    return Promise.resolve()
})