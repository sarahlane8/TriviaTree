export const filterQuestionsData = rawData => {
  const filteredQuestions = rawData.results.map((question, index) => {
    return {
      id: Date.now()+index,
      question: question.question,
      answer: question.correct_answer,
      isSaved: false
    }
  })
  return filteredQuestions
}

export const findCategoryNumber = category => {
  switch(category) {
    case 'science and nature':
      return 17
    case 'mythology':
      return 20
    case 'math':
      return 19
    case 'geography':
      return 22
    case 'animals':
      return 27
    case 'history':
      return 23
    default:
      return 9
  }
}
