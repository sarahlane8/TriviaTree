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

      .get('.nav-links > li > a').eq(2).click()

      .url().should('eq', 'http://localhost:3000/savedQuestions')
      .get('.questions-grid').should('be.visible')
      .get('.flip-card').should('have.length', 2)
      .get('.flip-card').should('have.length', 2)
      .get('.flip-card > button').eq(0).should('contain', '⭐️ Saved! ⭐️')
      .get('.question-card > p').eq(0).should('contain',
        'The proof for the Chinese Remainder Theorem used in Number Theory was NOT developed by its first publisher, Sun Tzu.')
      .get('.flip-card > button').eq(1).should('contain', '⭐️ Saved! ⭐️')
      .get('.question-card > p').eq(1).should('contain',
        '111,111,111 x 111,111,111 = 12,345,678,987,654,321')
  })

  it('Should tell the user if they don\'t have any saved questions yet', () => {
    cy.get('.nav-links > li > a').eq(2).click()
      .get('h2').should('be.visible').should('contain', 'You don\'t have any saved questions!')
  })

  it('Should remove a question when I click on the button from the saved questions display', () => {
    cy.get('.flip-card > button').eq(0).click()
      .get('.flip-card > button').eq(1).click()
      .get('.nav-links > li > a').eq(2).click()

      .get('.flip-card > button').eq(0).should('contain', '⭐️ Saved! ⭐️')
      .get('.question-card > p').eq(0).should('contain',
        'The proof for the Chinese Remainder Theorem used in Number Theory was NOT developed by its first publisher, Sun Tzu.')
      .get('.flip-card > button').eq(1).should('contain', '⭐️ Saved! ⭐️')
      .get('.question-card > p').eq(1).should('contain',
        '111,111,111 x 111,111,111 = 12,345,678,987,654,321')

      .get('.flip-card > button').eq(0).click()
      .get('.flip-card').should('have.length', 1)
      .get('.flip-card > button').eq(0).should('contain', '⭐️ Saved! ⭐️')
      .get('.question-card > p').eq(0).should('contain',
        '111,111,111 x 111,111,111 = 12,345,678,987,654,321')

      .get('.flip-card > button').eq(0).click()
      .get('h2').should('be.visible').should('contain', 'You don\'t have any saved questions!')
  })

})
