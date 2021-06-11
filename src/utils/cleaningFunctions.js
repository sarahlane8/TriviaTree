export const filterQuestionsData = (rawData) => {
  const filteredQuestions = rawData.results.map((question, index) => {
    return {
      id: Date.now()+index,
      question: question.question,
      answer: question.correct_answer,
      isFavorited: false
    }
  })
  return filteredQuestions
}
export const findCategoryNumber = (category) => {
  console.log('category', category)
  let catNum;
  if (category === 'general knowledge') {
    catNum = 9
  }
  if (category === 'science and nature') {
    catNum = 17
  }
  if (category === 'mythology') {
    catNum = 20
  }
  if (category === 'math') {
    catNum = 19
  }
  if (category === 'geography') {
    catNum = 22
  }
  if (category === 'animals') {
    catNum = 27
  }
  if (category === 'history') {
    catNum = 23
  }
  console.log('catNum', catNum)
  return catNum;

}
