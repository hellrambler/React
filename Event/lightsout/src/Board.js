import React, { Component } from 'react';
import Tile from './Tile';
import { randomSwitch, randomDim } from "./helper";
import "./Board.css";

class Board extends Component {

    static defaultProps = {
        dimension: 6
    }

    constructor(props) {
        super(props);
        let board = Array(this.props.dimension).fill().map(() => Array(this.props.dimension).fill(false));
        for (let row = 0; row < this.props.dimension; row++) {
            for (let col = 0; col < this.props.dimension; col++) {
                board[row][col] = randomSwitch();
            }
        }
        board[randomDim(this.props.dimension)][randomDim(this.props.dimension)] = true
        this.state = {
            board
        }
    }

    toggle = (row, col) => {
        const newboard = this.state.board.map((r, ridx) => (
            r.map((c, cidx) => (
                ((ridx == row && Math.abs(cidx - col) <= 1) || (cidx == col && Math.abs(ridx - row) <= 1))
                    ? (!c)
                    : c
            ))
        ))
        this.setState({ board: newboard });
    }

    generateTile = () => {
        return this.state.board.map((row, ridx) => (
            <div key={ridx} className="Board-row">
                {row.map((cell, cidx) => (
                    <Tile
                        key={ridx * this.props.dimension + cidx}
                        value={[ridx, cidx]}
                        on={cell}
                        toggle={this.toggle} />
                ))}
            </div>
        ))
    }

    render() {
        const isWin = this.state.board.reduce((curr, next) => (
            curr && next.reduce((curr, next) => (curr && !next), true)
        ), true)
        console.log(isWin);

        return (
            <div className='Board'>
                {!isWin
                    ? this.generateTile()
                    : "You Win!!"
                }
            </div>
        );
    }

}

export default Board;