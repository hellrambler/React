import React, { Component } from 'react';
import "./Tile.css"

class Tile extends Component {
    static defaultProps = {
        on: true
    }

    handleToggle = () => {
        this.props.toggle(this.props.value[0], this.props.value[1])
    }

    render() {
        const name = `Tile-${this.props.on ? "on" : "off"}`
        return (
            <div className={name} onClick={this.handleToggle}>

            </div>
        )
    }

}

export default Tile;