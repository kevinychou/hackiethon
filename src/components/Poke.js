import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ftheme = createMuiTheme({
    typography: {
      // Tell Material-UI what's the font-size on the html element is.
      htmlFontSize: 3,
    },
  });

const buttonStyle = makeStyles((theme) => ({
  root: {
      '& > *': {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        position: 'relative',
        alignItems: 'center',
        padding: '2% 4% 2% 4%',
        width: '60%'
    },
    "&:hover": {
      '& > *': {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'right',
        position: 'relative',
        alignItems: 'center',
        padding: '2% 4% 2% 4%',
        width: '90%'
      }
    }
  }
}));
  
function Poke() {
    const buttonClasses = buttonStyle();

    return (
      <div className={buttonClasses.root}>
          <Button variant="contained" onClick={() => { alert("You've just poked a friend - Enjoy the bunny! [This feature is a WIP!]")}}> 
              <ThemeProvider theme={ftheme}>
                  <Typography>Poke? 👉</Typography>
              </ThemeProvider>
          </Button>
      </div>
    );
}
export default Poke;