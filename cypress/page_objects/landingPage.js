function loginButton() { return cy.getByAttr('data-tab', 'tab-login'); }
function searchResourcesInput() { return cy.getById('search-value-fake'); }
function searchButton() { return cy.get('#search-fake > div > button.button.button--lg.button--white.button--icon'); }

export function goToLoginPage() {
  loginButton().click();
};

export function searchForResource(resourceName) {
  searchResourcesInput().clear().type(resourceName);
  searchButton().click();
};