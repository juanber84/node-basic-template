module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:jest/recommended',
        'prettier',
        'prettier/standard',
    ],
    rules: {
        // 'no-var': 1,
        // 'prefer-const': 1,
        'no-console': 1,
    },
}