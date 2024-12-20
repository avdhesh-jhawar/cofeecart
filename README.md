# Coffee Cart E2E Automation Test Suite

### Folder Structure

```bash
├── cypress
│   ├── fixtures        # Used as a datastore for fake data
│   ├── pageobjects     # used to create common methods (page wise)
│   ├── e2e             # Integration tests are added here (module wise)
│   │   └── **.spec.ts
│   └── support         # Project specific cypress customizations
│      └── commands     # Custom commands can be added here
│          └── **.ts
│
├── package.json
├── README.md
├── cypress.config.ts   # Cypress config
└── tsconfig.json       # TS config

```

## Initial setup

- install node and npm in your machine
- run `npm i` or `npm install` to install node_modules

## Running the tests - Headed

Open the Cypress Test Runner using the following command.

```
npm run headed
```
## You will see cypress open in browser mode, then click on E2E Testing -> select chrome browser -> You will see the test case. 
## click on coffeecart.spec.ts -> Test case start executing



## Running the tests - Headless

You can run cypress tests in headless mode using the following command.

```
npm run headless
```