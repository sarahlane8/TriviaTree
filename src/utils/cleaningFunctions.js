export const filterQuestionsData = (rawData) => {
  const filteredQuestions = rawData.results.map((question, index) => {
    return {
      id: Date.now()+index,
      question: question.question,
      answer: question.correct_answer
    }
  })
  return filteredQuestions
}
