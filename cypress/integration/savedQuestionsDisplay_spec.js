describe('SavedQuestionsDisplay', () => {
  beforeEach( () => {
    cy.fetchQuestions()
    cy.loadQuiz()
  })

  it('Should show my saved questions when I click on the Saved Questions nav link', () => {
    cy.get('.flip-card > button').eq(0).click()
      .get('.flip-card > button').eq(0).should('contain', '⭐️ Saved! ⭐️')

      .get('.flip-card > button').eq(1).click()
      .get('.flip-card > button').eq(1).should('contain', '⭐️ Saved! ⭐️')

      .get('.nav-links > li > a').eq(1).click()

      .url().should('eq', 'http://localhost:3000/savedQuestions')
      .get('.questions-grid').should('be.visible')
      .get('.flip-card').should('have.length', 2)


  })

  it('Should remove a question when I click on the button from the saved questions display', () => {
    cy.get('.flip-card > button').eq(0).click()
      .get('.flip-card > button').eq(1).click()
      .get('.nav-links > li > a').eq(1).click()

    cy.get('.flip-card > button').eq(0).click()
      .get('.flip-card').should('have.length', 1)
  })

  it('Should tell the user if they don\'t have any saved questions yet', () => {
    cy.get('.nav-links > li > a').eq(1).click()
      .get('h2').should('be.visible').should('contain', 'You don\'t have any saved questions yet!')

  })

})
