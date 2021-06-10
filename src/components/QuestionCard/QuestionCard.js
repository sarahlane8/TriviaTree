import './QuestionCard.css'
import { Component } from 'react'
import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'


const QuestionCard = ({ deleteQuestion, saveQuestion, id, isFavorited, question, answer  }) => {


  const handleClick = () => {
    isFavorited ? deleteQuestion(id) : saveQuestion(id)
  }

  const createMarkUpData = (data) => {
    let clean = DOMPurify.sanitize( data );
    return {__html: clean }
  }

  const whichStar = isFavorited ? "⭐️ Saved! ⭐️" : "Save Question"
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
  id: PropTypes.number,
  question: PropTypes.string,
  answer: PropTypes.string,
  saveQuestion: PropTypes.func,
  deleteQuestion: PropTypes.func
}

export default QuestionCard
