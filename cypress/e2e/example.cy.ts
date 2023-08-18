describe('Example test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });
  it('test', () => {
    cy.get('.card').should('be.visible');
  });
});
