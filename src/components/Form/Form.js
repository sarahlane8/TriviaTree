import './Form.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Component } from 'react'


class Form extends Component {
  constructor() {
    super()
    this.state = {
      category: 'general knowledge'
    }
  }

  handleChange = (event) => {
    this.setState({category: event.target.value}, () => console.log(16, this.state.category))
  }

  render() {
    const { getQuestions } = this.props
    return (
      <div className='questions-form'>
      <h2>Click the button for questions!</h2>

        <label>
        Choose your category:
          <select
            className='selections'
            value={this.state.category}
            onChange={this.handleChange}>
            <option value='general knowledge'>General Knowledge</option>
            <option value='science and nature'>Science and Nature</option>
            <option value='math'>Math</option>
            <option value='mythology'>Mythology</option>
            <option value='geography'>Geography</option>
            <option value='animals'>Animals</option>
            <option value='history'>History</option>
          </select>
        </label>

      <Link to='/questions'>
        <button onClick={ () => getQuestions(this.state.category) }>QUIZ ME!</button>
      </Link>
      </div>
    )
  }
}


Form.propTypes = {
  getQuestions: PropTypes.func
}

export default Form
