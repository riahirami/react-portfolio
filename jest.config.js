module.exports = {
  preset: "ts-jest",
  modulePaths: ["<rootDir>/src"],
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
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"], // Match test files
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Recognize file extensions
};
