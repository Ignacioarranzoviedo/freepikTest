import { Given, When, Then, And, After, Before } from 'cypress-cucumber-preprocessor/steps';

const LANDINGPAGE = require('../../page_objects/landingPage');
const LOGINPAGE = require('../../page_objects/loginPage');

Before(() => {
  cy.restoreLocalStorage();
});

Given("A user in the Freepik site", () => {
  cy.visit(Cypress.baseUrl);
});

Given("A user in the Log In page", () => {
  LANDINGPAGE.goToLoginPage();
});

When("the user fills the {string} input and the {string} input", (user, password) => {
  LOGINPAGE.fillLoginInputs(user, password);
});

And("the user click on Sing In button", () => {
  LOGINPAGE.signIn();
});