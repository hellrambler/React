import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinFlip extends Component {

    static defaultProps = {
        sides: [
            { side: "heads", imgsrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgsrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            coin: null,
            headCount: 0,
            tailCount: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flip() {
        const nextCoin = choice(this.props.sides);
        this.setState(st => {
            return {
                coin: nextCoin,
                headCount: st.headCount + (nextCoin.side === "heads" ? 1 : 0),
                tailCount: st.tailCount + (nextCoin.side === "tails" ? 1 : 0)
            }
        });
    }

    handleClick() {
        this.flip();
    }

    render() {
        return (
            <div className='CoinFlip'>
                <h2>Flip a Coin!</h2>
                <button onClick={this.handleClick}>Flip</button>
                {this.state.coin && < Coin info={this.state.coin} />}
                <p>Out of {this.state.headCount + this.state.tailCount} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails.</p>
            </div>
        )
    }

}

export default CoinFlip;