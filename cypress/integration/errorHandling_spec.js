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
      .get('.msg').should('contain', 'Sorry, we can\'t find your questions!')
  })

  it('Should tell the user if they reload the questions page and don\'t have any questions anymore', () => {
    cy.loadQuiz()
      .reload()
      .get('.msg').should('contain', 'Sorry, we can\'t find your questions!')
  })

  it('Should tell the user if they reload the saved questions page and don\t have any saved questions anymore', () => {
    cy.loadQuiz()
      .get('.flip-card > button').eq(0).click()
      .get('.nav-links > li > a').eq(2).should('contain', 'Saved Questions').click()
      .reload()
      .get('h2').should('be.visible').should('contain', 'You don\'t have any saved questions!')
  })

})
