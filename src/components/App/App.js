import './App.css';
import React, { Component } from "react"
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'


class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: []
    }
  }

  fetchQuestions = () => {

  }



  render() {

    return (
      <div className="App">
        <NavBar />
        <Form />
      </div>
    )
  }
}

export default App;
