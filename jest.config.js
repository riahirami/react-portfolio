module.exports = {
  preset: "ts-jest", // Use ts-jest for TypeScript support
  modulePaths: ["<rootDir>/src"], // Align with tsconfig.json baseUrl
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Match tsconfig.json paths
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json", // Specify the tsconfig file
    },
  },
};
