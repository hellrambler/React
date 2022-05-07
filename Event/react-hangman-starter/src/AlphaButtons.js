import React, { Component } from 'react';
import "./AlphaButtons.css";

class AlphaButtons extends Component {

    // handleClick = (evt) => {
    //     console.log("inside " + evt.target.value)
    //     this.props.onClick(evt);
    // }

    render() {
        return (
            <button className='AlphaButtons'
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                value={this.props.value}>
                {this.props.value}
            </button>
        )
    }
}

export default AlphaButtons;