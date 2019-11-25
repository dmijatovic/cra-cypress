/**
 * Stub notes api calls with test data. The default values is
 * fixture data from notes/data.json. Or you can pass other data
 * when calling this method
 */
Cypress.Commands.add("stubNotesApi", (seedData = "fixture:notes/data") => {
  cy.server();
  // cy.fixture("notes/data").as("noteItems");
  cy.route("GET", "/api/notes", seedData).as("apiNotes");
});
