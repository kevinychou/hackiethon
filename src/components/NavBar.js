import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from './wall-clock.png'
import Button from '@material-ui/core/Button';


import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';

import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const useStyles = makeStyles({
    menuButton: {
        marginRight: 16,
        marginLeft: -12
    },
    dropDown: {
        marginRight: 0,
        marginLeft: 'auto'
    },
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
      mainGradient: "linear-gradient(to top left, #00cc99 -76%, #3366ff 95%)",
    },
  },
});


const NavBar = () => {
    const classes = useStyles()
    return(
        <div>
        <AppBar position="static"
            style={{ background: theme.palette.primary.mainGradient }}
        >
            <Toolbar>

                <img className={classes.menuButton}
                    src={Icon} alt="Italian Trulli" width="40" height="40"/>

                <Typography variant="h5" color="inherit">
                    StudyFlow
                </Typography>

                <div className={classes.dropDown}>
                    <Button className={classes.dropDown} variant="contained">Start</Button>
                </div>

            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;


