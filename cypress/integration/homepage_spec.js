describe('Homepage', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it('Should display the nav bar', () => {
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
      .get('.questions-form > label').should('contain', 'Choose a category:')
      .get('.selections').should('have.value', 'general knowledge')
      .get('.selections').select('Mythology')
      .get('.selections').should('have.value', 'mythology')
      .get('.questions-form > a > button').should('contain', 'QUIZ ME!')
  })

  it('Should route the user to questions if they click the questions nav link', () => {
    cy.get('.nav-links > li > a').eq(1).should('contain', 'Questions').click()
      .url().should('eq', 'http://localhost:3000/questions')
  })

  it('Should route the user to saved questions if they click the saved questions nav link', () => {
    cy.get('.nav-links > li > a').eq(2).should('contain', 'Saved Questions').click()
      .url().should('eq', 'http://localhost:3000/savedQuestions')
  })

  it('Should route the user to home if they click the home nav link', () => {
    cy.get('.nav-links > li > a').eq(1).should('contain', 'Questions').click()
      .url().should('eq', 'http://localhost:3000/questions')
      .get('.nav-links > li > a').eq(0).should('contain', 'Home').click()
      .url().should('eq', 'http://localhost:3000/')
  })

})
