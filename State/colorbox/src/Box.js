import React, { Component } from 'react';
import "./Box.css"
import { choice } from './helper';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor() {
        let newColor = choice(this.props.colors);
        while (newColor === this.state.color) {
            newColor = choice(this.props.colors);
        }
        this.setState({ color: newColor })
    }

    handleClick() {
        this.changeColor();
    }

    render() {
        return (
            <div className='Box' style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>

            </div>
        )
    }
}

export default Box;