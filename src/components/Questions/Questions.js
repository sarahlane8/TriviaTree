import './Questions.css'
import QuestionCard from '../QuestionCard/QuestionCard'
import PropTypes from 'prop-types';


const Questions = ({ questions, saveQuestion }) => {
  const questionCards = questions.map((question, index) => {
    return(
      <QuestionCard
        key={Date.now()+index}
        id={Date.now()+index}
        question={question.question}
        answer={question.answer}
        saveQuestion={saveQuestion}
      />
    )
  })

  return(
    <section className='questions-grid'>
      {questionCards}
    </section>
  )
}

Questions.propTypes = {
  questions: PropTypes.array,
  saveQuestion: PropTypes.func,
}

export default Questions
