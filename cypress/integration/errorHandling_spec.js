describe('Error Handling', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it('Should display an error if the user tries to access a url that doesn\'t exist', () => {
    cy.visit('http://localhost:3000/madeUpURL')
      .get('.error-msg').should('contain', 'Sorry, something went wrong! Please return to the homepage!')
  })

  it('Should tell the user if the fetch failed', () => {
    cy.simulateFetchFail()
    cy.loadQuiz()
      .get('.questions-error-msg').should('contain', 'Sorry, we can\'t find your questions!')
  })

})
