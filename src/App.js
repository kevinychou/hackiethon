import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Pomo from './components/Pomo'
import Grid from '@material-ui/core/Grid';
import Quizlet from './components/Quizlet'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Grid container sm={12}>

          <Grid item sm={6}>
            <Quizlet />
          </Grid>

          <Grid item sm={6}>
            <Pomo />
          </Grid>
          
        </Grid>

      </div>
    )
  }
}
export default App