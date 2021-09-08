module.exports = {
    roots: ["src"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    collectCoverage: true,
    coverageDirectory: "jest_coverage",
    testPathIgnorePatterns: ["node_modules"],
    verbose: true,
    // coverageThreshold: {
    //     global: {
    //         branches: 65,
    //         functions: 80,
    //         lines: 85,
    //         statements: 85,
    //     },
    // },
    moduleNameMapper: { "\\.(css|scss)$": "<rootDir>/tests/styleMock.js" },
};
