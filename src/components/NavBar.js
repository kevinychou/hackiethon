import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from './wall-clock.png'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import MainMenu from './MainMenu'

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
                {/* Secret Button */}
                <Hidden>
                    <Box m={0}>
                        <Button onClick={() => { alert("Thank you for visiting our website and hope you enjoyed it!\n\nMade by McEggs 2021 through sweat, blood, and code.")}}
                        size='small' > 
                        </Button>
                    </Box>
                </Hidden>
                <img className={classes.menuButton}
                    src={Icon} alt="Italian Trulli" width="40" height="40"/>

                <Typography variant="h5" color="inherit">
                    StudyFlow
                </Typography>

                {/* <div className={classes.dropDown}>
                    <MainMenu className={classes.dropDown} />
                </div> */}

            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
