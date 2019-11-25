/**
 * Visit home page and stub page api calls with test data
 */
Cypress.Commands.add("visitHomePage", () => {
  const baseUrl = Cypress.config("baseUrl");
  cy.server();
  cy.fixture("home/data").as("homeData");
  cy.route("/api/home", "@homeData").as("apiHomePage");
  cy.visit(baseUrl);
});
