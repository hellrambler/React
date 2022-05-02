import React, { Component } from "react";
const POKE_API

class Pokecard extends Component {
    render() {
        const props = this.props;
        return (
            <div className="Pokecard">
                <h1>{props.name}</h1>

            </div>
        );
    }
}

export default Pokecard;