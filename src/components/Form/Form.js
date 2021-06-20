import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import './Form.css'


const Form = ( {getQuestions}) => {
  const [category, setCategory ] = useState('general knowledge')

    return (
      <div className='questions-form'>
        <label>Choose a category:</label>
        <select
          className='selections'
<<<<<<< HEAD
          name='categories'
          value={this.state.category}
          onChange={this.handleChange}>
=======
          value={category}
          onChange={ (event) => setCategory(event.target.value)}>
>>>>>>> main
          <option value='general knowledge'>General Knowledge</option>
          <option value='science and nature'>Science and Nature</option>
          <option value='math'>Math</option>
          <option value='mythology'>Mythology</option>
          <option value='geography'>Geography</option>
          <option value='animals'>Animals</option>
          <option value='history'>History</option>
        </select>
        <Link to='/questions'>
          <button onClick={ () => getQuestions(category) }>QUIZ ME!</button>
        </Link>
      </div>
    )
}

Form.propTypes = {
  getQuestions: PropTypes.func.isRequired
}

export default Form
