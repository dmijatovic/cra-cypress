/// <reference types="Cypress" />

const baseUrl = Cypress.config("baseUrl");

describe("Home page", () => {
  it("opens home page", () => {
    cy.visit(baseUrl);
  });

  context("Header component", () => {
    it("Homepage has Header component", () => {
      cy.get("[data-test-id='header-component']").should("exist");
    });
    it("has nav with at least one link item", () => {
      cy.get("[data-test-id='header-nav-link']").should("exist");
    });
  });
});
