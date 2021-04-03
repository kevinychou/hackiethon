import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timer from 'react-compound-timer';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import openSans from "@fontsource/open-sans"

const useStyles = makeStyles((theme) => ({
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

export default function Pomo() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper elevation={3}>
          <div style={{margin: '25% 0 0 25%', position: 'absolute'}}>
            <Typography 
              variant="h2"
              component="h4"
            >
              <Timer
                initialTime={(25 * 60 - 1) * 1000}
                lastUnit="m"
                direction="backward"
                >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div>
                            <Timer.Minutes />:
                            <Timer.Seconds />
                        </div>
                        {/* <div>{timerState}</div> */}
                        {/* <br /> */}
                        <div>
                            <button onClick={start}>Start</button>
                            <button onClick={pause}>Pause</button>
                            <button onClick={resume}>Resume</button>
                            <button onClick={stop}>Stop</button>
                            <button onClick={reset}>Reset</button>
                        </div>
                    </React.Fragment>
                )}
            </Timer>
          </Typography>
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
