import { filterQuestionsData, findCategoryNumber } from './cleaningFunctions'


export const getQuestions = async (category) => {
  const catNum = findCategoryNumber(category)
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${catNum}&difficulty=easy`)
    const checkedResponse = await checkResponse(response)
    const filteredQuestions = filterQuestionsData(checkedResponse)
    return filteredQuestions
  } catch (err) {
    throw Error(err.message)
  }
}

const checkResponse = response => {
  if (response.ok) {
    return response.json()
  }
  handleError(response.status)
}

const handleError = (status) => {
  if (status === 404) {
    throw Error('Sorry, page not found!')
  }

  if (status === 500) {
    throw Error('Sorry, this page isn\'t working!')
  }

  throw Error('Sorry, something went wrong!')
}
