function modalSelector() { return cy.get('#modal-detail > div > div.content > section'); }

export function checkResourceDataId(dataIdSelectedResource) {
  modalSelector().invoke('attr', 'data-id').should('equal', dataIdSelectedResource);
};

export function checkURLDataId(dataIdSelectedResource) {
  cy.url().should('include', dataIdSelectedResource);
};
