/// <reference types="Cypress" />

describe("Home page - basic load", () => {
  beforeEach(() => {
    //custom function defined in support
    cy.visitHomePage();
  });

  it("Homepage has Header component", () => {
    cy.get("[data-test-id='header-component']").should("exist");
  });
  it("has nav with at least one link item", () => {
    cy.get("[data-test-id='header-nav-link']").should("exist");
  });

  it("Shows home page content", () => {
    cy.wait("@apiHomePage");
    cy.get("[data-test-id='home-page-title']").contains("Home page fixture");
  });
});

describe("Home page - api failure", () => {
  it("Shows error message on failed api", () => {
    cy.server();
    cy.route({
      url: "/api/home",
      method: "GET",
      status: 500,
      response: {}
    });
    cy.visit("/");
    cy.get("[data-test-id='home-page-title']").contains("Fetch data failed");
  });
});
