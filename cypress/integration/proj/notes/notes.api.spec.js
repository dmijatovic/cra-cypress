/// <reference types="Cypress" />

describe("Notes api calls", () => {
  beforeEach(() => {
    // important stub call BEFORE visiting
    cy.server();
    cy.fixture("notes/data").as("noteItems");
    cy.route("/api/notes", "@noteItems").as("apiNotes");
  });

  it("should load 4 items", () => {
    // now visit page
    cy.visit("/notes");
    cy.wait("@apiNotes");
    cy.get("[data-test-id='note-list-item']").should("have.length", 4);
  });

  it("should show error message", () => {
    cy.server();
    cy.route({
      url: "/api/notes",
      method: "GET",
      status: 500,
      response: {}
    }).as("notesFailed");
    // now visit page
    cy.visit("/notes");
    cy.wait("@notesFailed");
    cy.get("[data-test-id='error-message']").should("exist");
  });

  it.only("Should show/hide loader...", () => {
    cy.server();
    cy.route({
      url: "/api/notes",
      method: "GET",
      status: 200,
      response: [],
      delay: 3000
    }).as("slowApi");

    cy.visit("/notes");
    cy.get("[data-test-id='page-loader']").should("exist");

    cy.wait("@slowApi");
    cy.get("[data-test-id='page-loader']").should("not.exist");
  });
});
