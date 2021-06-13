import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'
import './QuestionCard.css'


const QuestionCard = ({ deleteQuestion, saveQuestion, id, isFavorited, question, answer }) => {

  const handleClick = () => {
    isFavorited ? deleteQuestion(id) : saveQuestion(id)
  }

  const createMarkUpData = (data) => {
    let clean = DOMPurify.sanitize( data );
    return {__html: clean }
  }

  const whichStar = isFavorited ? '⭐️ Saved! ⭐️' : 'Save Question'

  return(
    <div className='flip-card' >
      <button onClick={ () => handleClick() }>{whichStar}</button>
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
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  saveQuestion: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  isFavorited: PropTypes.bool.isRequired
}

export default QuestionCard
