import './App.css';
import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

  fetchQuestions = () => {
    getQuestions()
    .then(data => this.setState({ questions: data}, () => console.log(this.state)) )
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
