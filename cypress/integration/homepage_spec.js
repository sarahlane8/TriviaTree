describe('Homepage', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it('Should display the nav bar', () => {
    cy.visit('http://localhost:3000')
    cy.get('.nav-bar').should('be.visible')
      .get('img').should('be.visible')
      .get('.nav-bar > h1').should('contain', 'Trivia Tree')
      .get('.nav-links > li').should('have.length', 3)
      .get('.nav-links > li > a').eq(0).should('contain', 'Home')
      .get('.nav-links > li > a').eq(1).should('contain', 'Questions')
      .get('.nav-links > li > a').eq(2).should('contain', 'Saved Questions')
  })

  it('Should display the form', () => {
    cy.get('.questions-form').should('be.visible')
      .get('.questions-form > h2').should('contain', 'Click the button for questions!')
      .get('.questions-form > a > button').should('contain', 'QUIZ ME!')
  })

})
