/// <reference types="Cypress" />

// import { home } from "../../fixtures/home/data";

describe("Home page", () => {
  beforeEach(() => {
    // cy.server();
    // cy.fixture("home/home.json").as("homeData");
    // cy.route("/api/home", "@homeData").as("apiHomePage");
    // cy.visit(baseUrl);
  });

  context("Header component", () => {
    it("Homepage has Header component", () => {
      cy.get("[data-test-id='header-component']").should("exist");
    });
    it("has nav with at least one link item", () => {
      cy.get("[data-test-id='header-nav-link']").should("exist");
    });
  });

  it("Shows home page content", () => {
    cy.visitHomePage();
    cy.wait("@apiHomePage");
    cy.get("[data-test-id='home-page-title']").contains("Home page fixture");
  });
});

describe("Failed", () => {
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
