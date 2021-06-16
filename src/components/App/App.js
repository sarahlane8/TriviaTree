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
    this.toggleIsSaved(id)
    const isQuestionAlreadySaved = this.findIndexOfQuestion(id, this.state.savedQuestions)
    if (isQuestionAlreadySaved === -1) {
      const questionToSaveIndex = this.findIndexOfQuestion(id, this.state.questions)
      this.setState( {savedQuestions: [...this.state.savedQuestions, this.state.questions[questionToSaveIndex]] } )
    }
  }

  toggleIsSaved = id => {
    this.setState(prevState => {
        const updatedQuestions = prevState.questions.map(question => {
            if (question.id === id) {
                question.isSaved = !question.isSaved
            }
            return question
        })
        return {
            questions: updatedQuestions
        }
    })
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
                  {this.state.loading && !this.state.error && <h2 className='msg'>Loading your questions!</h2>}
                  {this.state.error && <h2 className='msg'>{errorMsg}</h2>}
                  {!this.state.questions.length && !this.state.loading && <h2 className='msg'>{errorMsg}</h2>}
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
                  {!this.state.savedQuestions.length && <h2 className='msg'>You don't have any saved questions!</h2>}
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
