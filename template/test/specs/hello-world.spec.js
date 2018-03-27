'use strict'

describe('Hello World', function () {

    beforeAll(() => {
        let indexFile = require('./../../src')
        this.message = indexFile
        return Promise.resolve()
    })

    beforeEach(() => {
        let generateToken = Date.now() + ''
        this.generateToken = generateToken
        return Promise.resolve()
    })

    it('Index', async () => {
        expect(this.generateToken).toBe(this.generateToken)
        expect(this.message).toBe('hello world')
    })

})