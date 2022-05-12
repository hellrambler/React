import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  handleToggle = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {

    const dieName = `Die ${this.props.locked && "Die-locked"}`

    const faClass = `fas fa-dice-${this.props.name}`
    return (
      <button
        className={dieName}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleToggle}
      >
        <i className={faClass} />
      </button>
    );
  }
}

export default Die;
