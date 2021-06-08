import './Form.css'

const Form = ({ getQuestions }) => {
  return (
    <div className="questions-form">
      <h2>Click the button for questions!</h2>
      <button onClick={ () => getQuestions() }>QUIZ ME!</button>
    </div>
  )
}

export default Form
