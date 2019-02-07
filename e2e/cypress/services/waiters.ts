export class Waiters {
  static waitForSomeResponse(action: () => void) {
    cy.server();
    cy.route('GET', /someRegex/).as('connection');
    action();
    cy.wait(`@connection`)
      .its('status')
      .should('eq', 200);
  }
}
