import './Questions.css'
import QuestionCard from '../QuestionCard/QuestionCard'
import PropTypes from 'prop-types';


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

  if (!questions.length) {
    return(
      <h2 className='error-msg'>Sorry, we can't find your questions!</h2>
    )
  }
  
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
