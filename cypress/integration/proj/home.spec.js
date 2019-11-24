/// <reference types="Cypress" />

const baseUrl = Cypress.config("baseUrl");

describe("Home page", () => {
  it("opens home page", () => {
    cy.visit(baseUrl);
  });
});
