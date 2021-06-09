import './Questions.css'
import QuestionCard from '../QuestionCard/QuestionCard'


const Questions = ({ questions }) => {
  console.log(6, questions)
  const questionCards = questions.map((question, index) => {
    return(
      <QuestionCard
        id={Date.now()+index}
        question={question.question}
        answer={question.answer}
      />
    )
  })
  return(
    <section className='questions-grid'>
      {questionCards}
    </section>
  )
}


export default Questions
