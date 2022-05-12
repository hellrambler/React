import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  static defaultProps = {
    description: {
      Ones: "Score 1 for every 1",
      Twos: "Score 2 for every 2",
      Threes: "Score 3 for every 3",
      Fours: "Score 4 for every 4",
      Fives: "Score 5 for every 5",
      Sixes: "Score 6 for every 6",
      "Three of Kind": "Score sum of all dice",
      "Four of Kind": "Score sum of all dice",
      "Full House": "Score 25 points",
      "Small Straight": "Score 30 points",
      "Large Straight": "Score 40 points",
      "Yahtzee": "Score 50 points",
      "Chance": "Score sum of all dice"
    }
  }

  render() {
    const sc = this.props.score === undefined ? this.props.description[this.props.name] : this.props.score;
    return (
      <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{sc}</td>
      </tr>
    )
  }
}

export default RuleRow;