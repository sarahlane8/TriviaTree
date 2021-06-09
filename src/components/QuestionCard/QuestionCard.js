import './QuestionCard.css'
import DOMPurify from 'dompurify'


const QuestionCard = ({ question, answer }) => {

  const createMarkUpData = (data) => {
    let clean = DOMPurify.sanitize( data );
    return {__html: clean }
  }

  return(
    <div className='flip-card' >
      <div className='flip-card-inner'>
        <article className='question-card'>
          <p dangerouslySetInnerHTML={ createMarkUpData(question) } />
        </article>
        <article className='answer' >
          <p dangerouslySetInnerHTML={ createMarkUpData(answer) } />
        </article>
      </div>
    </div>
  )
}





export default QuestionCard
