import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./MemeGenerator.css";
import barkSound from './audio/bark.wav';
import sleepSound from './audio/sleep.wav';
import raymanSound from './audio/Rayman_Sounds.wav';

class MemeGenerator extends React.Component {

  constructor() {
    super();
    this.state = {
      font_size: "30",
      topText: "tEST",
      bottomText: "Good!",
      randomImg: "http://imgflip.com/s/meme/Grumpy-Cat.jpg",
      allMemeImgs: [{"ID":1,"bottomText":"Good!","image":"http://imgflip.com/s/meme/Grumpy-Cat.jpg","name":"Grumpy Cat","rank":10,"tags":"Tardar Sauce, Tabatha Bundesen, Felis domesticus","topText":""},{"ID":7,"bottomText":"Winter is Coming","image":"https://imgflip.com/s/meme/Brace-Yourselves-X-is-Coming.jpg","name":"Brace Yourselves","rank":20,"tags":"Winter is Coming, Ned Stark, Sean Bean, Game of Thrones, GOT, Imminent Ned","topText":"Brace Yourselves"},{"ID":3,"bottomText":"Or just ___","image":"https://imgflip.com/s/meme/Futurama-Fry.jpg","name":"Futurama Fry","rank":30,"tags":"Not Sure If","topText":"Not sure if ___"},{"ID":5,"bottomText":"Walk into mordor","image":"https://imgflip.com/s/meme/One-Does-Not-Simply.jpg","name":"One Does Not Simply","rank":40,"tags":"One Does Not Simply Walk Into Mordor, Boromir, Sean Bean, Ned Stark, LOTR, Lord of the rings, One Ring","topText":"One does not simply"},{"ID":4,"bottomText":null,"image":"https://imgflip.com/s/meme/Bad-Luck-Brian.jpg","name":"Bad Luck Brian","rank":50,"tags":"Bad Luck Kyle","topText":null},{"ID":6,"bottomText":null,"image":"https://imgflip.com/s/meme/First-World-Problems.jpg","name":"First World Problems","rank":60,"tags":"Crying, FWP, White Whine","topText":null},{"ID":2,"bottomText":"Who ___","image":"https://imgflip.com/s/meme/Am-I-The-Only-One-Around-Here.jpg","name":"Am I The Only One Around Here","rank":70,"tags":"Dude Abides, Big Lebowski, Angry Walter Sobchak","topText":"Am I the only one around here"},{"ID":8,"bottomText":"Success!","image":"https://imgflip.com/s/meme/Success-Kid.jpg","name":"Success Kid","rank":80,"tags":"I hate sandcastles, eating sand","topText":null},{"ID":9,"bottomText":null,"image":"https://imgflip.com/s/meme/Awkward-Moment-Sealion.jpg","name":"Awkward Moment Seal","rank":90,"tags":"Poker Face","topText":null},{"ID":10,"bottomText":null,"image":"https://imgflip.com/s/meme/Confession-Bear.jpg","name":"Confession Bear","rank":100,"tags":"Animal, Advice","topText":null},{"ID":15,"bottomText":"Enough!","image":"https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg","name":"Batman Slapping Robin","rank":110,"tags":"My parents are dead","topText":""},{"ID":16,"bottomText":"","image":"https://imgflip.com/s/meme/Grandma-Finds-The-Internet.jpg","name":"Grandma Finds the Internet","rank":120,"tags":"Internet Grandma Surprise","topText":""},{"ID":11,"bottomText":"\"Aliens\"","image":"https://imgflip.com/s/meme/Ancient-Aliens.jpg","name":"Ancient Aliens","rank":130,"tags":"History Channel Guy, Giorgio A Tsoukalos","topText":""},{"ID":14,"bottomText":"","image":"https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg","name":"Condescending Wonka","rank":140,"tags":"Creepy WIlly Wonka, Willy wonka and the chocolate factory, Gene Wilder","topText":""},{"ID":12,"bottomText":"","image":"https://imgflip.com/s/meme/Actual-Advice-Mallard.jpg","name":"Actual Advice Mallard","rank":150,"tags":"Green, Duck, Advice","topText":""},{"ID":13,"bottomText":"But when I do ___","image":"https://imgflip.com/s/meme/The-Most-Interesting-Man-In-The-World.jpg","name":"The Most Interesting Man in the World","rank":160,"tags":"Jonathan Goldsmith","topText":"I don't always ___"},{"ID":56,"bottomText":"","image":"https://imgflip.com/s/meme/Philosoraptor.jpg","name":"Philosoraptor","rank":165,"tags":"What if, dinosaur, Velociraptor, metaphysical inquiries","topText":"What if ..."},{"ID":17,"bottomText":"Everywhere","image":"https://imgflip.com/s/meme/X-Everywhere.jpg","name":"X, X Everywhere","rank":170,"tags":"Toy story, Buzz lightyear, Woody","topText":"___, ___"},{"ID":20,"bottomText":"That'd be great","image":"https://imgflip.com/s/meme/That-Would-Be-Great.jpg","name":"That would be great","rank":180,"tags":"Bill Lumbergh, Office Space","topText":"Yeah, If you could just ___"},{"ID":18,"bottomText":"","image":"http://imgflip.com/s/meme/Grumpy-Cat.jpg","name":"Good Guy Greg","rank":180,"tags":"ggg","topText":"      "},{"ID":258,"bottomText":"Show Me What You Got","image":"http://i.imgur.com/6Ln3hp8.png","name":"Show Me What You Got","rank":188,"tags":"Rick and Morty, Giant Heads, Dan, Justin, Adult Swim","topText":""},{"ID":21,"bottomText":"","image":"http://imgflip.com/s/meme/Grumpy-Cat.jpg","name":"What if I told you","rank":200,"tags":"Matrix, Morpheus, Lawrence Fishburne","topText":"What if I Told You"},{"ID":55,"bottomText":"Ain't nobody got time for that","image":"https://imgflip.com/s/meme/Aint-Nobody-Got-Time-For-That.jpg","name":"Ain't nobody got time for that","rank":205,"tags":"sweet brown Kimberly Wilkins","topText":""},{"ID":54,"bottomText":"","image":"https://imgflip.com/s/meme/Insanity-Wolf.jpg","name":"Insanity Wolf","rank":205,"tags":"animal, insane, dog","topText":""}],      want_rick: false,
      status: 0,
    };
    this.buttonClasses = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(3),
          size: 'small',
          textAlign: 'center',
          justify: 'center',
          alignItems: 'center'
        },
      },
    }));
    this.barkAudio = new Audio(barkSound);
    this.sleepAudio = new Audio(sleepSound);
    this.raymanAudio = new Audio(raymanSound);
  }

  handleClickExercise = () => {
    this.setState({ randomImg: ""  });
    this.setState({ topText: "" });
    this.setState({ bottomText: "" });
    this.setState({ want_rick: false });
    this.setState({ status: 3 });
    this.sleepAudio.play();
  };

  handleClickNull = () => {
    this.setState({ randomImg: ""  });
    this.setState({ topText: "" });
    this.setState({ bottomText: "" });
    this.setState({ want_rick: false });
    this.setState({ status: 2 });
    this.raymanAudio.play();
  };

  handleClick = () => {
    this.setState({ want_rick: false})
    this.setState({ status: 0 })
    let randomNumber = Math.floor(
      Math.random() * this.state.allMemeImgs.length * 2
    );
    this.setState({ status: 0 })
    if (randomNumber < 10) {
        this.setState({ randomImg: ""  });
        this.setState({ topText: "" });
        this.setState({ bottomText: "" });
        this.setState({ want_rick: true })
        this.raymanAudio.play();
    } else {
        console.log(randomNumber);
        this.barkAudio.play();
        if (randomNumber >= this.state.allMemeImgs.length+10) {
            fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                this.setState({randomImg:data.message});
                this.setState({ topText: "" });
                this.setState({ bottomText: "" });
                console.log(data);
            })
        } else {
            this.setState({ randomImg: this.state.allMemeImgs[randomNumber-10].image });
            this.setState({ topText: this.state.allMemeImgs[randomNumber-10].topText });
            this.setState({ bottomText: this.state.allMemeImgs[randomNumber-10].bottomText });
        }
    }
  };

  render() {
    let content;
    if (this.state.want_rick || this.state.status == 2) {
      content = (
        <div className={this.buttonClasses.root}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      );
    } else if (this.state.status == 3) {
      content = (
        <div className={this.buttonClasses.root}>
          <iframe src="https://www.overstellar.se/random-exercise/#" height="600" width="100%" ></iframe>
        </div>
      );
    } else {
      content = (
        <div>
          <div className="meme">
            <h2
              //style={{ fontSize: Number(this.state.font_size) }}
              className="top"
            >
              {this.state.topText}
            </h2>
            <img src={this.state.randomImg} alt="" />
            <h2
              style={{ fontSize: Number(this.state.font_size) }}
              className="bottom"
            >
              {this.state.bottomText}
            </h2>
          </div>
        </div>
      );
    }

    return(
      <div className={this.buttonClasses.root}>
        <Button variant="contained" size='small' onClick={this.handleClick}>Quick meme and doggo break?</Button>
        <Button variant="contained" size='small' onClick={this.handleClickNull}>It's a secret ;)</Button>
        <Button variant="contained" size='small' onClick={this.handleClickExercise}>Quick Exercise whoop!</Button>
        {content}
      </div>
    );
  }
}

export default MemeGenerator;

/*<input
            type="text"
            name="topText"
            placeholder="top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <br />
          <input
            type="number"
            name="font_size"
            placeholder="font size"
            onChange={this.handleChange}
            value={this.state.font_size}
          />*/