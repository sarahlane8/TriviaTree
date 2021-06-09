import { filterQuestionsData } from './cleaningFunctions'


export const getQuestions = async () => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=19&type=boolean')
    const checkedResponse = await checkResponse(response)
    const filteredQuestions = filterQuestionsData(checkedResponse)
    return filteredQuestions
  } catch (err) {
    console.log(err)
  }
}

const checkResponse = response => {
  if (response.ok) {
    return response.json()
  }
}
