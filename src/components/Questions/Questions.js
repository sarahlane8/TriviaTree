import './Questions.css'


const Questions = ({ questions }) => {
  console.log(questions)
  const questionsCards = questions.map(question => {
    return(
      <QuestionCard
        question={question.question}
        answer={question.answer}
      />
    )
  })
  return(
    <section className='questions-grid'>
      {questionsCards}
    </section>
)

}


export default Questions
