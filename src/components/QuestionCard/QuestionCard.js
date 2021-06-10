import './QuestionCard.css'
import { Component } from 'react'
import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'


class QuestionCard extends Component {
  constructor() {
    super()
    this.state = {
      // isFavorited: false
    }
  }

  handleClick = () => {
    const { deleteQuestion, saveQuestion, id,  } = this.props
    this.props.isFavorited ? deleteQuestion(id) : saveQuestion(id)
    // this.changeFavoritedStatus()
  }

  // changeFavoritedStatus = () => {
  //   this.setState({
  //     isFavorited: !this.state.isFavorited
  //   })
  // }

  createMarkUpData = (data) => {
    let clean = DOMPurify.sanitize( data );
    return {__html: clean }
  }

  render() {
    const whichStar = this.props.isFavorited ? "⭐️ Saved! ⭐️" : "Save Question"
    return(
      <div className='flip-card' >
        <button onClick={ () => this.handleClick() }>{whichStar}</button>
        <div className='flip-card-inner'>
          <article className='question-card'>
            <p dangerouslySetInnerHTML={this.createMarkUpData(this.props.question) } />
          </article>
          <article className='answer' >
            <p dangerouslySetInnerHTML={this.createMarkUpData(this.props.answer) } />
          </article>
        </div>
      </div>
    )
  }
}

QuestionCard.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  answer: PropTypes.string,
  saveQuestion: PropTypes.func,
  deleteQuestion: PropTypes.func
}

export default QuestionCard
