Cypress.Commands.add('fetchQuestions', () => {
  cy.intercept('https://opentdb.com/api.php?amount=12&category=9&difficulty=easy',
    {
      "response_code": 0,
      "results": [
        {
          "category": "Science: Mathematics",
          "type": "boolean",
          "difficulty": "medium",
          "question": "The proof for the Chinese Remainder Theorem used in Number Theory was NOT developed by its first publisher, Sun Tzu.",
          "correct_answer": "True",
          "incorrect_answers": [
          "False"
          ]
        },
        {
          "category": "Science: Mathematics",
          "type": "boolean",
          "difficulty": "medium",
          "question": "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
          "correct_answer": "True",
          "incorrect_answers": [
          "False"
          ]
        }
      ]
    }
  )
})

Cypress.Commands.add('loadQuiz', () => {
  cy.visit('http://localhost:3000')
  cy.get('.questions-form > a > button').click()
})

Cypress.Commands.add('simulateFetchFail', () => {
  cy.intercept('https://opentdb.com/api.php?amount=12&category=9&difficulty=easy',
    {
      "ok": false
    }
  )
})
