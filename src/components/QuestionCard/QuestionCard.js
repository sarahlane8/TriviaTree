import './QuestionCard.css'
import { Component } from 'react'
import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'



class QuestionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorited: false
    }
  }

  changeFavoritedStatus = () => {
    this.setState({
      isFavorited: !this.state.isFavorited
    })
  }

  createMarkUpData = (data) => {
    let clean = DOMPurify.sanitize( data );
    return {__html: clean }
  }

  render() {
    const whichStar = this.state.isFavorited ? "⭐️ Saved! ⭐️" : "Save Question"
    return(
      <div className='flip-card' >
        <button onClick={ () => this.changeFavoritedStatus() }>{whichStar}</button>
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
  answer: PropTypes.string
}

export default QuestionCard
