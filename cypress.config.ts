import { defineConfig } from 'cypress'

export default defineConfig({
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  video: true,
  viewportHeight: 900,
  viewportWidth: 1600,
  numTestsKeptInMemory: 50,
  requestTimeout: 45000,
  responseTimeout: 45000,
  pageLoadTimeout: 60000,
  experimentalMemoryManagement: true,
  e2e: {
    baseUrl: 'https://coffee-cart.app/',
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 20000,
  },
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 0
  }
})