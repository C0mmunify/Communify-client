config = {
    setupFilesAfterEnv: [
        './src/__setup__/setupTests.js',
    ],
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
}

module.exports = config