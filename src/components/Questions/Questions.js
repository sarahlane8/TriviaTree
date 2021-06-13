import PropTypes from 'prop-types';
import QuestionCard from '../QuestionCard/QuestionCard'
import './Questions.css'


const Questions = ({ questions, saveQuestion, deleteQuestion }) => {

  const questionCards = questions.map((question, index) => {
    return(
      <QuestionCard
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer}
        saveQuestion={saveQuestion}
        deleteQuestion={deleteQuestion}
        isFavorited={question.isFavorited}
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
  deleteQuestion: PropTypes.func
}

export default Questions
