describe('Main View', () => {

  beforeEach(() => {
    cy.fixture('../fixtures/reservation-data.json')
    .then((reservations) => {
      cy.intercept('http://localhost:3001/api/v1/reservations', {
        body: reservations,
        statusCode: 200
      });
    });
    cy.visit('http://localhost:3000')
  });

  it('Should display the site title on page load', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })
})
