import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTimer } from 'react-compound-timer';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './Pomo.css';
import Button from '@material-ui/core/Button';
import restSound from './audio/rest_now.wav';
import workSound from './audio/keep_working.wav';

const useStyles = makeStyles((theme) => ({
  // Timer display CSS
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(100),
      height: theme.spacing(40),
    },
    textAlign: 'center',
    position: 'relative',
  },
  workPaper: {
    backgroundColor: '#a6d4fa',
    padding: '3% 20%'
  },
  restPaper: {
    backgroundColor: '#81c784',
    padding: '3% 20%'
  },
  message: {
    fontSize: '30px'
  }
}));

const buttonStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Pomo() {
  const classes = useStyles();
  const buttonClasses = buttonStyle();
  const [working, setWorking] = useState(true);
  const workTime = (25 * 60) * 1000;
  const restTime = (5 * 60) * 1000;
  const paperStyle = useRef(classes.workPaper);

  // Audio files
  const restAudio = new Audio(restSound);
  const workAudio = new Audio(workSound);

  const playSound = audioFile => { audioFile.play(); };

  const { value, controls } = useTimer({
    initialTime: workTime,
    lastUnit: "m",
    direction: "backward"
  });

  const switchTime = (working) => {
    setWorking(working);
    controls.reset();
    if (working === false) {
      controls.setTime(restTime);
      paperStyle.current = classes.restPaper;
      playSound(restAudio);
    } else {
      controls.setTime(workTime);
      paperStyle.current = classes.workPaper;
      playSound(workAudio);
    }
    controls.start();
  }

  useEffect(
    () => {
      controls.setCheckpoints([{
          time: 0,
          callback: () => {
            if (working === true) {
              switchTime(false);
            } else {
              switchTime(true);
            }
          }
        }]
      );
    },
    [],
  )

  const toggleRest = () => {
    const message = document.querySelector('h1');
    if (working === true) {
      switchTime(false);
      message.textContent = 'Rest Now!';
    } else {
      switchTime(true);
      message.textContent = 'Keep Working!';
    }
  };

  return (
    <div className={classes.root}>
      <div class="container">
          <Paper elevation={3} className={paperStyle.current}>
            <Typography
              variant="h1"
              component="h2"
            >
              <React.Fragment>
                <h1 className={classes.message}>Keep Working!</h1>
                <div className={buttonClasses.root}>
                  {String(value.m).length > 1 ? value.m : '0' + value.m}:
                  {String(value.s).length > 1 ? value.s : '0' + value.s}
                  <br></br>
                  <Button variant="contained" onClick={controls.start}>Start</Button>
                  <Button variant="contained" color="#00CA4E" onClick={controls.pause}>Pause</Button>
                  <Button variant="contained" color="secondary" onClick={function(event){ controls.pause(); controls.reset();}}>Reset</Button>
                  <Button variant="contained" id="toggleRest" onClick={toggleRest}>Switch</Button>
                </div>
              </React.Fragment>
            </Typography>
          </Paper>
      </div>
    </div>
  );
}
export default Pomo;