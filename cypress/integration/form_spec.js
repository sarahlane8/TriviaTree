describe('Form', () => {
  beforeEach( () => {
    cy.fetchGeographyQuestions()
  })

  it('Should fetch questions based on user input choice for a category', () => {
    cy.visit('http://localhost:3000')
    cy.get('.questions-form > label').should('contain', 'Choose a category:')
      .get('select').select('geography').invoke('val').should('eq', 'geography')
      .get('button').click()
      .get('.questions-grid').should('be.visible')
      .get('.flip-card').should('have.length', 2)
      .get('.flip-card > button').eq(0).should('contain', 'Save Question')
      .get('.question-card > p').eq(0).should('contain',
        'The Alps are a mountain range on which continent?')
      .get('.flip-card > button').eq(1).should('contain', 'Save Question')
      .get('.question-card > p').eq(1).should('contain',
      'Rhode Island is actually located on the US mainland, despite its name')
  })
})


