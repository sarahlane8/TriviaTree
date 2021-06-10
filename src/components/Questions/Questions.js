import './Questions.css'
import QuestionCard from '../QuestionCard/QuestionCard'
import PropTypes from 'prop-types';


const Questions = ({ questions, saveQuestion, deleteQuestion }) => {

  const questionCards = this.props.questions.map((question, index) => {
    return(
      <QuestionCard
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer}
        saveQuestion={this.props.saveQuestion}
        deleteQuestion={this.props.deleteQuestion}
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
