import './QuestionCard.css'
import DOMPurify from 'dompurify'
import { Component } from 'react'


class QuestionCard extends Component {
  constructor() {
    super()
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
const whichStar = this.state.isFavorited ? "https://drive.google.com/uc?export=view&id=13_jn9vQvAdNzdcbdRmYoR6mBOZHoeqzU" : "https://drive.google.com/uc?export=view&id=1TW-aKpR_uBW0Ayp6AtTqVq5cxuX27GiH"
  return(
    <div className='flip-card' >
    <button onClick={ () => this.changeFavoritedStatus() }><img src={whichStar} /></button>
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





export default QuestionCard
