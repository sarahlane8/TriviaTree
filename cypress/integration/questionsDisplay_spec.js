describe('Questions Display', () => {
  beforeEach( () => {
    cy.fetchQuestions()
    cy.loadQuiz()

  })

  it('Should display the question cards in a grid', () => {
    cy.get('.questions-grid').should('be.visible')
  })

  it('Should save a card', () => {

  })

  it('Should unsave a saved card', () => {

  })
})
