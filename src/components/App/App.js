import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import Questions from '../Questions/Questions'
import NoMatch from '../NoMatch/NoMatch'
import { getQuestions } from '../../utils/apiCalls/apiCalls'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      savedQuestions: [],
      error: null
    }
  }

  fetchQuestions = async (category) => {
    try {
      const response = await getQuestions(category)
      this.setState( {questions: response} )
    } catch (err) {
      this.setState( {error: err} )
    }
  }

  saveQuestion = id => {
    const question = this.toggleIsSaved(id)
    const newQuestionToSave = this.state.savedQuestions.find(savedQuestion => question.id === savedQuestion.id)
    if (!newQuestionToSave) {
      this.setState( {savedQuestions: [...this.state.savedQuestions, question]} )
    }
  }

  toggleIsSaved = id => {
    const allQuestions = this.state.questions
    const index = this.findIndexOfQuestion(id, allQuestions)
    if (index !== -1) {
      allQuestions[index].isSaved = !allQuestions[index].isSaved
    }
    this.setState({questions: allQuestions})
    return allQuestions[index]
  }

  findIndexOfQuestion = (id, questions) => {
    const index = questions.findIndex(question => question.id === id)
    return index
  }


  deleteQuestion = id => {
    this.toggleIsSaved(id)
    const filteredSavedQuestions = this.state.savedQuestions.filter(question => question.id !== id)
    this.setState( {savedQuestions: filteredSavedQuestions} )
  }

  render() {
    return (
      <main className='App'>
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
            exact path='/questions'
            render={ () => {
              return(
                <div>
                  {!this.state.questions.length && <h2 className='questions-error-msg'>Sorry, we can't find your questions!</h2>}
                  <Questions
                    questions={this.state.questions}
                    saveQuestion={this.saveQuestion}
                    deleteQuestion={this.deleteQuestion}
                  />
                </div>
              )
            }}
          />

          <Route
            exact path='/savedQuestions'
            render={ () => {
              return(
                <div className='questions-grid-error'>
                  {!this.state.savedQuestions.length && <h2>You don't have any saved questions!</h2>}
                  <Questions
                    questions={this.state.savedQuestions}
                    saveQuestion={this.saveQuestion}
                    deleteQuestion={this.deleteQuestion}
                  />
                </div>
              )
            }}
          />

          <Route component={NoMatch} />

        </Switch>
      </main>
    )
  }
}

export default App;
