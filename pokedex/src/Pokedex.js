import React, { Component } from 'react';
import Pokecard from "./pokecard";
import "./Pokedex.css";

class Pokedex extends Component {

    render() {
        return (
            <div className='Pokedex'>
                <h2>Pokedex #{this.props.group}</h2>
                <p>This group got {this.props.exp} points</p>
                <p>
                    {
                        this.props.isWinner
                        ? "Winner" 
                        : "Loser"
                    }
                </p>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) =>(
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;