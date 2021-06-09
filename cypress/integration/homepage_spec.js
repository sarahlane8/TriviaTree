describe('Homepage', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it('Should display the nav bar', () => {
    cy.visit('http://localhost:3000')
    cy.get('.nav-bar').should('be.visible')
      .get('img').should('be.visible')
      .get('.nav-bar > h1').should('contain', 'Trivia Tree')
      .get('.nav-links > button').should('have.length', 2)
      .get('.nav-links > button').eq(0).should('contain', 'Home')
      .get('.nav-links > button').eq(1).should('contain', 'Saved Questions')
  })

  it('Should display the form', () => {
    cy.get('.questions-form').should('be.visible')
      .get('.questions-form > h2').should('contain', 'Click the button for questions!')
      .get('.questions-form > a > button').should('contain', 'QUIZ ME!')
  })

})
