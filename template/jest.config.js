'use strict'

module.exports = {
    globalSetup: './test/utils/globalSetup.js',
    globalTeardown: './test/utils/globalTeardown.js',
    setupTestFrameworkScriptFile: './test/utils/setupTestFrameworkScriptFile.js',
    testEnvironment: 'node',
    coverageDirectory: 'reports',
    coverageReporters: ['json', 'lcov', 'html'],
    coveragePathIgnorePatterns: [
        'node_modules', 
        'test/server', 
        'test/utils'
    ]
}