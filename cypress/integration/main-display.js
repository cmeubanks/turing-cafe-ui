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

  it('Should update the form value when the user types into the input fields', () => {
    cy.get('form').get('input[name="name"]')
      .type('Caroline')
      .should('have.value', 'Caroline')
      .get('form').get('input[name="date"]')
      .type('12/25')
      .should('have.value', '12/25')
      .get('form').get('input[name="time"]')
      .type('6:00')
      .should('have.value', '6:00')
      .get('form').get('input[name="number"]')
      .type('12')
      .should('have.value', 12)
  })

  it('Should add a new reservation to reservations field once a request has been submitted', () => {
    cy.get('form').get('input[name="name"]')
      .type('Greg')
      .get('form').get('input[name="date"]')
      .type('01/15')
      .get('form').get('input[name="time"]')
      .type('10:30')
      .get('form').get('input[name="number"]')
      .type('2')
      .get('button').contains('MAKE RESERVATION').click()
      .get('.resy-card').should('have.length', 4)
  })
})
