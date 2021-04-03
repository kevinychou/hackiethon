import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Pomo from './components/Pomo'
import Grid from '@material-ui/core/Grid';
import Quizlet from './components/Quizlet'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import './Styles/App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      // '-apple-system',
      'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Source Sans Pro"',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
}
export default App