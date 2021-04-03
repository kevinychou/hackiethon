import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <iframe src="https://quizlet.com/555471868/flashcards/embed?i=3iac9z&x=1jj1" height="1000" width="50%" ></iframe>
      </div>
    )
  }
}
export default App