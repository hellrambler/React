import React, { Component } from "react";
import sodaImg from "./Soda.png";
import "./Soda.css";
import { Link } from "react-router-dom";
import Message from "./Message";

class Soda extends Component {
  render() {
    return (
      <div className='Soda'>
        <img src={sodaImg} alt='coca cola can' />
        <Message>
          <h1>SODAAAAA IS MY FAVORITE</h1>
          <h3>But now I drink sparkling water instead</h3>
          <p>(I still miss Soda)</p>
        </Message>
        <img src={sodaImg} alt='coca cola can' />
        <Message>
          <Link to="/">Go Back</Link>
        </Message>

      </div>
    );
  }
}

export default Soda;
