import { filterQuestionsData } from './cleaningFunctions'

export const getQuestions = () => {
  return fetch('https://opentdb.com/api.php?amount=10&category=19&type=boolean')
    .then(response => checkResponse(response))
    .then(data => filterQuestionsData(data))
}


const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
}
