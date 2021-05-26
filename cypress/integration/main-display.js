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

  it('Should render an empty reservation form field on page load', () => {
    cy.get('form').get('input').should('have.length', 4)
      .get('form').should('have.value', '')
      .get('button').contains('MAKE RESERVATION')
  })

  it('Should render exisiting reservations from database', () => {
    cy.get('.resy-card').should('have.length', 3)
  })
})
