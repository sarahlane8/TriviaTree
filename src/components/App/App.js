import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import Questions from '../Questions/Questions'
import NoMatch from '../NoMatch/NoMatch'
import { getQuestions } from '../../utils/apiCalls/apiCalls'
import './App.css';


const App = () => {
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ questions, setQuestions ] = useState([])
  const [ savedQuestions, setSavedQuestions ] = useState([])

  const fetchQuestions = async (category) => {
    try {
      setLoading(true), setQuestions([])
      const response = await getQuestions(category)
      setLoading(false), setQuestions(response)
    } catch (err) {
      setError(err)
    }
  }

  const saveQuestion = id => {
    toggleIsSaved(id)
    const isQuestionAlreadySaved = findIndexOfQuestion(id, savedQuestions)
    if (isQuestionAlreadySaved === -1) {
      const questionToSaveIndex = findIndexOfQuestion(id, questions)
      setSavedQuestions(...savedQuestions, questions[questionToSaveIndex])
    }
  }

  const toggleIsSaved = id => {
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

  const findIndexOfQuestion = (id, questions) => {
    const index = questions.findIndex(question => question.id === id)
    return index
  }

  const deleteQuestion = id => {
    this.toggleIsSaved(id)
    const filteredSavedQuestions = savedQuestions.filter(question => question.id !== id)
    setSavedQuestions(filteredSavedQuestions)
  }


    return (
      <main className='App'>
        <NavBar />

        <Switch>

          <Route
            exact path='/'
            render={ () => {
              return(
                <Form getQuestions={fetchQuestions} />
              )
            }}
          />

          <Route
            exact path='/questions'
            render={ () => {
              const errorMsg = 'Sorry, we can\'t find your questions!'
              return(
                <div>
                  {loading && !error && <h2 className='msg'>Loading your questions!</h2>}
                  {error && <h2 className='msg'>{errorMsg}</h2>}
                  {!questions.length && !loading && <h2 className='msg'>{errorMsg}</h2>}
                  <Questions
                    deleteQuestion={deleteQuestion}
                    questions={questions}
                    saveQuestion={saveQuestion}
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
                  {!savedQuestions.length && <h2 className='msg'>You don't have any saved questions!</h2>}
                  <Questions
                    deleteQuestion={deleteQuestion}
                    questions={savedQuestions}
                    saveQuestion={saveQuestion}
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

export default App;
