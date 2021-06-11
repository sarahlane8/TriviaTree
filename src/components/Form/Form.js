import './Form.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Component } from 'react'


class Form extends Component {
  constructor() {
    super()
    this.state = {
      category: ''
    }
  }


  render() {
    const { getQuestions } = this.props
    return (
      <div className='questions-form'>
      <h2>Click the button for questions!</h2>
      <Link to='/questions'>
      <button onClick={ () => getQuestions() }>QUIZ ME!</button>
      </Link>
      </div>
    )
  }
}


Form.propTypes = {
  getQuestions: PropTypes.func
}

export default Form
