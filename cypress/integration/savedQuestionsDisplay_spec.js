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

      .get('.flip-card > button').eq(0).click()
      .get('.flip-card').should('have.length', 1)
  })
})
