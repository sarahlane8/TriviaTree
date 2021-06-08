import './App.css';
import React, { Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import { getQuestions } from '../../utils/apiCalls'


class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: []
    }
  }

  fetchQuestions = () => {
    getQuestions()
    .then(data => console.log(data))
  }



  render() {

    return (
      <div className="App">
        <NavBar />
        <Form getQuestions={this.fetchQuestions}/>
      </div>
    )
  }
}

export default App;
