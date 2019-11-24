/// <reference types="Cypress" />

import { home } from "../../fixtures/home/data";

const baseUrl = Cypress.config("baseUrl");

describe("Home page", () => {
  beforeEach(() => {
    cy.server();
    cy.fixture("home/home.json").as("homeData");
    cy.route("/api/home", "@homeData").as("apiHomePage");
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

  it("Shows home page content", () => {
    cy.wait("@apiHomePage").then(xhr => {
      console.log("xhr...", xhr);
    });
    cy.get("[data-test-id='home-page-title']").contains("Home page fixture");
  });
});
