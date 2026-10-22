# cypress-ecommerce-automation
UI automation testing project using Cypress and JavaScript
# Cypress E-commerce Automation

UI automation testing project built using **Cypress** and **JavaScript** to test key e-commerce workflows on [Automation Exercise](https://www.automationexercise.com/).

## Project Overview

This project demonstrates hands-on practice in web UI automation, test assertions, reusable test setup, and test data management using Cypress.

## Tech Stack

- **Automation Tool:** Cypress
- **Programming Language:** JavaScript
- **Test Runner:** Cypress
- **Test Data:** Cypress Fixtures
- **Version Control:** Git and GitHub

## Test Scenarios

The project covers the following scenarios:

### Shopping Cart
- Add a product to the cart.
- Verify product name, price, and quantity.
- Add multiple products and verify cart details.
- Update product quantity and verify the total.
- Remove a product and verify the updated cart.

### Login
- Verify login with valid credentials.
- Verify login with invalid credentials.

### User Registration and Account
- Register a new user using a unique email address.
- Verify registration behavior for an already registered email.
- Verify account deletion flow.

## Project Structure

```text
cypress-ecommerce-automation/
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

*Note: The structure above is a guide; adjust it to match the actual folders in your repository.*

## Prerequisites

- Node.js and npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/rahul051091/cypress-ecommerce-automation.git
cd cypress-ecommerce-automation
```

Install dependencies:

```bash
npm install
```

## Run Tests

Open the Cypress Test Runner:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

## Test Data

Test data is maintained using Cypress fixtures where applicable. Use dedicated test accounts and dummy credentials. Do not commit real passwords or sensitive information.

## Future Improvements

- Add API testing and network interception scenarios.
- Improve reusable test utilities and Page Object Model structure where appropriate.
- Configure automated test execution using GitHub Actions CI.

## Author

**Rahul Ahluwalia**

GitHub: [rahul051091](https://github.com/rahul051091)

