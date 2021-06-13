import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'
import './QuestionCard.css'


const QuestionCard = ({ answer, deleteQuestion, id, isSaved, question, saveQuestion }) => {

  const handleClick = () => {
    isSaved ? deleteQuestion(id) : saveQuestion(id)
  }

  const createMarkUpData = (data) => {
    let clean = DOMPurify.sanitize( data );
    return {__html: clean }
  }

  const buttonText = isSaved ? '⭐️ Saved! ⭐️' : 'Save Question'

  return(
    <div className='flip-card' >
      <button onClick={handleClick}>{buttonText}</button>
      <div className='flip-card-inner'>
        <article className='question-card'>
          <p dangerouslySetInnerHTML={createMarkUpData(question) } />
        </article>
        <article className='answer' >
          <p dangerouslySetInnerHTML={createMarkUpData(answer) } />
        </article>
      </div>
    </div>
  )
}

QuestionCard.propTypes = {
  answer: PropTypes.string.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isSaved: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  saveQuestion: PropTypes.func.isRequired
}

export default QuestionCard
