describe('Form', () => {
  beforeEach( () => {
    cy.fetchGeographyQuestions()
  })

  it('Should fetch questions based on ', () => {
    cy.visit('http://localhost:3000')
    cy.get('.questions-form > label').should('contain', 'Choose a category:')
      .get('select').select('geography').invoke('val').should('eq', 'geography')
      .get('button').click()
      // .get('.flip-card').should('have.length', 12)
  })
})
