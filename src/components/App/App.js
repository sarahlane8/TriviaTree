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

  saveQuestion = question => {
    
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
