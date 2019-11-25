/// <reference types="Cypress" />

describe("Notes page", () => {
  beforeEach(() => {
    cy.visit("/notes");
  });
  it("Can navigate to Notes page", () => {
    cy.get("[data-test-id='notes-page-title']")
      .should("exist")
      .should("contain", "Notes");
  });
  it("has focus on input element after load", () => {
    cy.focused().should("have.attr", "data-test-id", "note-input-text");
  });

  it("accepts input myTestNote", () => {
    const inputNote = "My Test Note";
    cy.get("[data-test-id='note-input-text']")
      .type(inputNote)
      .should("have.value", inputNote);
  });

  it("adds new note to the list on add btn", () => {
    const inputNote = "My Test Note";
    //type input
    cy.get("[data-test-id='note-input-text']").type(inputNote);
    //press add button
    cy.get("[data-test-id='add-note-btn']").click();
    //check items
    cy.get("[data-test-id='note-list-item']").should("contain", inputNote);
  });
  it("adds new note to the list on Enter", () => {
    const inputNote = "My Test Note";
    //type input
    cy.get("[data-test-id='note-input-text']")
      .type(inputNote)
      .type("{enter}");
    //check items
    cy.get("[data-test-id='note-list-item']").should("contain", inputNote);
  });

  it("clear input after adding the item", () => {
    const inputNote = "My Test Note";
    //type input
    cy.get("[data-test-id='note-input-text']")
      .type(inputNote)
      .type("{enter}")
      .should("have.value", "");
  });

  it("Notes list should have two items after adding", () => {
    //type text and press enter
    const inputNote = "My Test Note{enter}";
    //type input
    cy.get("[data-test-id='note-input-text']")
      .type(inputNote)
      .type(inputNote);
    cy.get("[data-test-id='note-list-item']").should("have.length", 2);
  });
});
