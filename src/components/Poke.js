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

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));



const buttonStyle = makeStyles((theme) => ({
root: {
    '& > *': {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(70),
      height: theme.spacing(0),
    },
    textAlign: 'center',
    position: 'relative',
    },
},
}));
  
export default function ButtonSizes() {
    const classes = useStyles();
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