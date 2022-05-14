import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  handleToggle = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {

    const dieName = `Die ${this.props.locked && "Die-locked"} ${this.props.rolling && !this.props.locked && "Die-rolling"}  fa-solid fa-5x fa-dice-${this.props.name}`
    return (
      <i
        className={dieName}
        onClick={this.handleToggle}
      />

    );
  }
}

export default Die;
