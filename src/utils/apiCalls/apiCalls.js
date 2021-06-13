import { filterQuestionsData } from '../utilities'


export const getQuestions = async (category) => {
  const catNum = findCategoryNumber(category)
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=12&category=${catNum}&difficulty=easy`)
    const checkedResponse = await checkResponse(response)
    const filteredQuestions = filterQuestionsData(checkedResponse)
    return filteredQuestions
  } catch (err) {
    throw Error(err.message)
  }
}

const findCategoryNumber = category => {
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
