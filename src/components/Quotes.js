import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import quotes from "./quotes.json";

const buttonStyle = makeStyles(() => ({
  root: {
      position: 'absolute',
      bottom: '8%',
      right: '5%'
  },
}));

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#90a4ae',
    width: '95%',
    height: '100%',
    padding: '20px 20px'
  }
}));

function Quotes() {
    const classes = useStyles();
    const buttonClasses = buttonStyle();

    const [quoteNumber, setQuoteNumber] = useState(0);
    const quoteList = quotes;
    const initial = Math.floor(Math.random()*quotes.length);
    const quote = useRef([quoteList[initial].text, quoteList[initial].author]);
    const generateQuote = () => {
        const randomNumber = Math.floor(Math.random()*quotes.length);
        setQuoteNumber(randomNumber);
        console.log(randomNumber);
    }

    useEffect(
        () => {
            quote.current = [quoteList[quoteNumber].text, 
            quoteList[quoteNumber].author];
        },
        [quoteNumber]
    )

    return (
        <React.Fragment>
            <div>
                <Paper elevation={3} className={classes.root}>
                    <div className={buttonClasses.root}>
                        <Button variant="contained" onClick={generateQuote}>Refresh</Button>
                    </div>
                    <div>
                        <h1> {quote.current[0]} </h1>
                        <h2> {quote.current[1]} </h2>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    );
}
export default Quotes;