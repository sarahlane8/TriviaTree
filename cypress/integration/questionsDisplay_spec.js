describe('Questions Display', () => {
  beforeEach( () => {
    cy.fetchQuestions()
    cy.loadQuiz()
  })

  it('Should display the question cards in a grid', () => {
    cy.url().should('eq', 'http://localhost:3000/questions')

    cy.get('.nav-bar').should('be.visible')
      .get('img').should('be.visible')
      .get('.nav-bar > h1').should('contain', 'Trivia Tree')
      .get('.nav-links > li').should('have.length', 3)
      .get('.nav-links > li > a').eq(0).should('contain', 'Home')
      .get('.nav-links > li > a').eq(1).should('contain', 'Questions')
      .get('.nav-links > li > a').eq(2).should('contain', 'Saved Questions')

    cy.get('.questions-grid').should('be.visible')
      .get('.flip-card').should('have.length', 2)
      .get('.flip-card > button').eq(0).should('contain', 'Save Question')
      .get('.question-card > p').eq(0).should('contain',
        'The proof for the Chinese Remainder Theorem used in Number Theory was NOT developed by its first publisher, Sun Tzu.')
      .get('.flip-card > button').eq(1).should('contain', 'Save Question')
      .get('.question-card > p').eq(1).should('contain',
      '111,111,111 x 111,111,111 = 12,345,678,987,654,321')
  })

  it('Should save a card', () => {
    cy.get('.flip-card > button').eq(0).should('contain', 'Save Question')
      .get('.flip-card > button').eq(0).click()
      .get('.flip-card > button').eq(0).should('contain', '⭐️ Saved! ⭐️')

    cy.get('.flip-card > button').eq(1).should('contain', 'Save Question')
      .get('.flip-card > button').eq(1).click()
      .get('.flip-card > button').eq(1).should('contain', '⭐️ Saved! ⭐️')
  })

  it('Should unsave a saved card', () => {
    cy.get('.flip-card > button').eq(0).should('contain', 'Save Question')
      .get('.flip-card > button').eq(0).click()
      .get('.flip-card > button').eq(0).should('contain', '⭐️ Saved! ⭐️')
      .get('.flip-card > button').eq(0).click()
      .get('.flip-card > button').eq(0).should('contain', 'Save Question')

    cy.get('.flip-card > button').eq(1).should('contain', 'Save Question')
      .get('.flip-card > button').eq(1).click()
      .get('.flip-card > button').eq(1).should('contain', '⭐️ Saved! ⭐️')
      .get('.flip-card > button').eq(1).click()
      .get('.flip-card > button').eq(1).should('contain', 'Save Question')
  })

  it('Should only show the user the question on the card', () => {
    cy.get('.flip-card').eq(0).get('.question-card').should('be.visible')
      .get('.flip-card').eq(0).get('.answer').should('not.be.visible')
  })

})
