describe('Form', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })


  it('Should fetch questions based on ', () => {
    cy.get('.questions-form > label').should('contain', 'Choose a category:')
      .get('.selections').should('have.value', 'general knowledge')
      .get('.selections').select('Geography')
      .get('.selections').should('have.value', 'geography')
      .get('.questions-form > a > button').should('contain', 'QUIZ ME!').click()


  })
})
