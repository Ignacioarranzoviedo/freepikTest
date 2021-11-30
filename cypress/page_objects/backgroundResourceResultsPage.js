function freeFilter() { return cy.getById('filter-selection'); }
function photosFilter() { return cy.get('#filter-type > label[for="type-photo"]'); }
function includePeopleFilter() { return cy.getByAttr('for','people-include'); }
function adultFilter() { return cy.getByAttr('for', 'demographic-adult'); }
function southAsianFilter() { return cy.getByAttr('for', 'demographic-southasian'); }
function acceptCokkiesButton() { return cy.getById('onetrust-accept-btn-handler'); }
function firstResult() { return cy.get('#main > div.list-view > div.list-container > div.list-content > section > div > figure:nth-child(1) > div > a'); }
function selectedFilters() { return cy.get('#header-filter > div.scrollable-mobile > div.container-accordion.applied-filters > div > div > div.accordion__content.pd-x-none > div > ul'); }

export function setSomeFilters() {
  freeFilter().click({force: true});

  cy.wait('@getAccountGoogle');
  photosFilter().click({force: true});

  cy.wait('@getAccountGoogle');
  includePeopleFilter().click({force: true});

  cy.wait('@getAccountGoogle');
  adultFilter().click({force: true});

  cy.wait('@getAccountGoogle');
  southAsianFilter().click({force: true});
    
};

export function acceptCokkies() {
  acceptCokkiesButton().click();
};

export function selectFirstResult(){
  let firstResultDataId=firstResult().invoke('attr', 'data-id');

  return firstResultDataId;
};

export function firstResultClick(){
  firstResult().click();
};