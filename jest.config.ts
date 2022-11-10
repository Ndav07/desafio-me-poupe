export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "babel",
  moduleNameMapper: {
    "@modules/(.*)": "<rootDir>/src/modules/$1",
    "@shared/(.*)": "<rootDir>/src/shared/$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [ "**/*.spec.ts" ],
};