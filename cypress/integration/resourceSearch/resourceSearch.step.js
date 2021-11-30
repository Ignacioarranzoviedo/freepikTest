import { Given, When, Then, And, After, Before } from 'cypress-cucumber-preprocessor/steps';

const LANDINGPAGE = require('../../page_objects/landingPage');
const BACKGROUNDRESOURCERESULTSPAGE = require('../../page_objects/backgroundResourceResultsPage')
const SELECTEDRESOURCEPAGE = require('../../page_objects/selectedResourcePage')

let dataIdSelectedResource;

Before(() => {
  cy.restoreLocalStorage();
  cy.intercept('GET', `https://accounts.google.com/gsi/status?client_id=**`).as('getAccountGoogle');
  cy.intercept('POST', `https://ct.pinterest.com/md/`).as('postPinterest');
});

Given("A user types the {string} in the Resource Finder", (resourceName) => {
  cy.wait('@getAccountGoogle')
  LANDINGPAGE.searchForResource(resourceName);
});

When("the user sets some filters", () => {
  BACKGROUNDRESOURCERESULTSPAGE.acceptCokkies();
  BACKGROUNDRESOURCERESULTSPAGE.setSomeFilters();
});

And("the user select a resource", () => {
  cy.wait('@getAccountGoogle');
  BACKGROUNDRESOURCERESULTSPAGE.selectFirstResult()
  .then(firstResultDataId => {
    return dataIdSelectedResource = firstResultDataId;
  })
});

Then("the oppened tab and the new URL have the same data-id", () => {
  BACKGROUNDRESOURCERESULTSPAGE.firstResultClick();
  cy.wait('@postPinterest');
  SELECTEDRESOURCEPAGE.checkURLDataId(dataIdSelectedResource);
  SELECTEDRESOURCEPAGE.checkResourceDataId(dataIdSelectedResource);
});