import './QuestionCard.css'


const QuestionCard = ({ question, answer }) => {

  function createMarkUp() {
    return {__html: question }
  }

  return(
    <article className='question-card'>
      <p dangerouslySetInnerHTML={ createMarkUp() } />
    </article>
  )
}

export default QuestionCard
