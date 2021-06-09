import './Form.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Form = ({ getQuestions }) => {
  return (
    <div className="questions-form">
      <h2>Click the button for questions!</h2>
      <Link to="/questions">
        <button onClick={ () => getQuestions() }>QUIZ ME!</button>
      </Link>
    </div>
  )
}

Form.propTypes = {
  getQuestions: PropTypes.func
}

export default Form
