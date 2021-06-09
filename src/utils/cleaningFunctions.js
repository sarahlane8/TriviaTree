export const filterQuestionsData = (rawData) => {
  const filteredQuestions = rawData.results.map(question => {
    return {
      question: question.question,
      answer: question.correct_answer
    }
  })
  return filteredQuestions
}
