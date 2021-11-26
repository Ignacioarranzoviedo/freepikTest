function loginButton() { return cy.getByAttr('data-tab', 'tab-login'); }
function searchResourcesInput() { return cy.getById('search-value-fake'); }

export function goToLoginPage() {
  loginButton().click();
};
