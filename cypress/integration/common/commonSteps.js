import { Given, When, Then, And, After, Before } from 'cypress-cucumber-preprocessor/steps';

Given("A user in the Freepik site", () => {
  cy.visit(Cypress.config().baseUrl);
});