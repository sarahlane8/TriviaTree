export const filterQuestionsData = rawData => {
  const filteredQuestions = rawData.results.map((question, index) => {
    return {
      key: Date.now()+index,
      answer: question.correct_answer,
      id: Date.now()+index,
      isSaved: false,
      question: question.question
    }
  })
  return filteredQuestions
}
