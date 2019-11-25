/**
 * Stub notes api calls with test data
 */
Cypress.Commands.add("stubNotesApi", () => {
  cy.server();
  cy.fixture("notes/data").as("noteItems");
  cy.route("/api/notes", "@noteItems").as("apiNotes");
});
