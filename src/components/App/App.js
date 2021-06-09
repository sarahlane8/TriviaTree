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
      questions: []
    }
  }

  fetchQuestions = async () => {
    try {
      const response = await getQuestions()
      this.setState({questions: response}, () => console.log(this.state.questions))
    } catch (err) {
      console.log(err)
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
                <Questions questions={this.state.questions} />
              )
            }}
          />

        </Switch>
      </main>
    )
  }
}

export default App;
