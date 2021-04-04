import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import quotes from "./quotes.json";

const buttonStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Quotes(props) {
    const [quoteNumber, setQuoteNumber] = useState(0);
    const quoteList = quotes;
    const buttonClasses = buttonStyle();
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
            <div className={buttonClasses.root}>
                <Button variant="contained" onClick={generateQuote}>Refresh</Button>
            </div>
            <div>
                <h1> {quote.current[0]} </h1>
                <h2> {quote.current[1]} </h2>
            </div>
        </React.Fragment>
    );
}
export default Quotes;