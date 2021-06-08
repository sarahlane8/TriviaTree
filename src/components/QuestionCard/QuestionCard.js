import './QuestionCard.css'


const QuestionCard = ({ question, answer }) => {

  const createMarkUpData = (data) => {
    return {__html: data }
  }


  return(
    <div className='flip-card' >
      <article className='question-card'>
        <p dangerouslySetInnerHTML={ createMarkUpData(question) } />
      </article>
      <article className='answer' >
        <p dangerouslySetInnerHTML={ createMarkUpData(answer) } />
      </article>
    </div>
  )
}

export default QuestionCard
