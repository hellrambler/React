import React, { Component } from "react";
import AlphaButtons from "./AlphaButtons";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from "./words";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), nGuessed: 0 };
    this.handleGuess = this.handleGuess.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    if (this.state.nWrong >= this.props.maxWrong) {
      return this.state.answer;
    } else {
      return this.state.answer
        .split("")
        .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    }
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    // console.log(ltr);
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      nGuessed: st.nGuessed + st.answer.split("").filter(char => char === ltr).length
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  // generateButtons() {
  //   return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
  //     <button
  //       key={ltr}
  //       value={ltr}
  //       onClick={this.handleGuess}
  //       disabled={this.state.nWrong >= this.props.maxWrong || this.state.nGuessed === this.state.answer.length ? true : this.state.guessed.has(ltr)}
  //     >
  //       {ltr}
  //     </button>
  //   ));
  // }

  generateButtonsNew() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <AlphaButtons
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.nWrong >= this.props.maxWrong || this.state.nGuessed === this.state.answer.length ? true : this.state.guessed.has(ltr)}
      />
    ));
  }

  restart = () => {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
      nGuessed: 0
    })
  }

  /** render: render game */
  render() {
    const wrongGuess = "Number of Wrong Guesses: " + this.state.nWrong;
    const msg = this.state.nWrong < this.props.maxWrong ? wrongGuess : "You Lose!";

    console.log(this.state.nGuessed);
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={wrongGuess} />
        <p> {this.state.nGuessed.size === this.state.answer.length ? "You Win!!!" : msg} </p>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtonsNew()}</p>
        <button onClick={this.restart} className="Hangman-restart">Restart</button>
        {/* <p className='Hangman-btns'>{this.generateButtonsNew()}</p> */}
      </div>
    );
  }
}

export default Hangman;
