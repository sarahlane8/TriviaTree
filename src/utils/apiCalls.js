export const getQuestions = () => {
  return fetch('https://opentdb.com/api.php?amount=10&category=19&difficulty=easy')
    .then(response => response.json())
}
