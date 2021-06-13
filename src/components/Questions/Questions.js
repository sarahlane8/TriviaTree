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
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
    isFavorited: PropTypes.bool
  })).isRequired,
  saveQuestion: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired
}

export default Questions
