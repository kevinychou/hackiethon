import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timer, { useTimer } from 'react-compound-timer';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import './Pomo.css';
import Button from '@material-ui/core/Button';

// import openSans from "@fontsource/open-sans"


const useStyles = makeStyles((theme) => ({
  // Timer display CSS
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
    textAlign: 'center',
    position: 'relative',
  },
}));

const buttonStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Pomo() {

  const classes = useStyles();
  const buttonClasses = buttonStyle();
  let { working, setWorking } = useState(true);

  const { value, controls } = useTimer({
    initialTime: 3000,
    lastUnit: "m",
    direction: "backward"
  });

  useEffect(
    () => {
      controls.setCheckpoints([{
          time: 0,
          callback: () => {
            if (working === true) {
              working = false;
              controls.setTime((6 * 1) * 1000);
              controls.start();
            } else {
              working = true;
              controls.setTime((7 * 1) * 1000);
              controls.start();
            }
          }
        }]
      );
    },
    [],
  )

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
          <div class="container">
            <div class="child">
              <Typography 
                variant="h2"
                component="h4"
              >
                <div> 
                  {String(value.m).length > 1 ? value.m : '0' + value.m}:
                  {String(value.s).length > 1 ? value.s : '0' + value.s}
                    <div className={buttonClasses.root}>
                        <Button variant="contained" onClick={controls.start}>Start</Button>
                        <Button variant="contained" onClick={controls.pause}>Pause</Button>
                        <Button variant="contained" onClick={controls.reset}>Reset</Button>
                    </div>
                </div>
              </Typography>
            </div>
          </div>
      </Paper>
    </div>
  );
}
// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function OutlinedCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
