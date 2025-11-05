export default {
  testEnvironment: "node",
  // Run tests from compiled output to avoid TS transforms
  testMatch: ["<rootDir>/dist/**/*.test.js"],
  // No transforms needed when running compiled JS
  transform: {},
};
