describe("Main app navigation", () => {
  beforeEach(() => {
    cy.visitHomePage();
  });
  it("Exists", () => {
    cy.get("[data-test-id='header-nav']").should("exist");
  });
  it("Contains link items", () => {
    cy.get("[data-test-id='header-nav-link']").should("exist");
  });
});
