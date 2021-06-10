import './App.css';
import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import Questions from '../Questions/Questions'
import { getQuestions } from '../../utils/apiCalls'


class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      savedQuestions: [],
      error: ''
    }
  }

  fetchQuestions = async () => {
    try {
      const response = await getQuestions()
      this.setState({ questions: response })
    } catch (err) {
      this.setState({ error: err })
    }
  }

  findQuestion = id => {
    const question = this.state.questions.find(question => question.id === id)
    this.saveQuestion(question)
  }

  saveQuestion = question => {
   const newQuestionToSave = this.state.savedQuestions.find(savedQuestion => question.id === savedQuestion.id)
   if (!newQuestionToSave) {
     this.setState( {savedQuestions: [...this.state.savedQuestions, question]}, () => console.log(this.state.savedQuestions))
   }
  }

  render() {

    return (
      <main className="App">
        <NavBar />

        <Switch>

          <Route
            exact path='/'
            render={ () => {
              return(
                <Form getQuestions={this.fetchQuestions} />
              )
            }}
          />

          <Route
            exact path ='/questions'
            render={ () => {
              return(
                <Questions
                  questions={this.state.questions}
                  saveQuestion={this.saveQuestion}
                  findQuestion={this.findQuestion}
                />
              )
            }}
          />

        </Switch>
      </main>
    )
  }
}

export default App;
