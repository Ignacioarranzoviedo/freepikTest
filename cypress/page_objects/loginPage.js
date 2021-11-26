function userInput() { return cy.getById('login-username'); }
function passwordInput() { return cy.getById('login-password'); }
function signInButton() { return cy.getById('auth-login-form-1'); }

export function fillLoginInputs(user, password) {
  userInput().clear().type(user);
  passwordInput().clear().type(password);
};

export function signIn() {
  signInButton().click();
};