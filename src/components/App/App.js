import './App.css';
import React, { Component } from "react"
import '../NavBar/NavBar'


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

          <p>
            Learn React
          </p>

      </div>
    )
  }
}

export default App;
