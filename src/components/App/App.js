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
      error: null,
      loading: false,
      questions: [],
      savedQuestions: []
    }
  }

  fetchQuestions = async (category) => {
    try {
      this.setState( {loading: true, questions: []} );
      const response = await getQuestions(category)
      this.setState( {loading: false, questions: response} )
    } catch (err) {
      this.setState( {error: err} )
    }
  }

  saveQuestion = id => {
    const questionToSave = this.toggleIsSaved(id)
    const isQuestionAlreadySaved = this.state.savedQuestions.find(savedQuestion => questionToSave.id === savedQuestion.id)
    if (!isQuestionAlreadySaved) {
      this.setState( {savedQuestions: [...this.state.savedQuestions, questionToSave]} )
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
              const errorMsg = 'Sorry, we can\'t find your questions!'
              return(
                <div>
                  {this.state.loading && !this.state.error && <h2 className='loading-msg'>Loading your questions!</h2>}
                  {this.state.error && <h2 className='questions-error-msg'>{errorMsg}</h2>}
                  {!this.state.questions.length && !this.state.loading && <h2 className='questions-error-msg'>{errorMsg}</h2>}
                  <Questions
                    deleteQuestion={this.deleteQuestion}
                    questions={this.state.questions}
                    saveQuestion={this.saveQuestion}
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
                    deleteQuestion={this.deleteQuestion}
                    questions={this.state.savedQuestions}
                    saveQuestion={this.saveQuestion}
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
