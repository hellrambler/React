import React, { Component } from 'react';
import axios from "axios";
import Card from './Card';
import "./Deck.css";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";


class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawn: []
        };
    }

    async componentDidMount() {
        let deck = await axios.get(API_BASE_URL + "/new/shuffle/");
        this.setState({
            deck: deck.data.deck_id
        });
    }

    handleDeal = async () => {
        try {
            let cardUrl = `${API_BASE_URL}/${this.state.deck}/draw/`
            let cardData = await axios.get(cardUrl);
            if (!cardData.data.success) {
                throw new Error("No card left");
            }
            let card = cardData.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (e) {
            alert(e);
        }
    }

    render() {
        const cards = this.state.drawn.map(card => (
            <Card key={card.id} img={card.image} name={card.name} />
        ))
        return (
            <div className='Deck'>
                <h1 className='Deck-title'>	&#9830; Card Dealer &#9830;</h1>
                <h2 className='Deck-title subtitle'>&#9830; React LifeCycle &#9830;</h2>
                <button className='Deck-btn' onClick={this.handleDeal}>Get Card!</button>
                <div className='Deck-card'>
                    {cards}
                </div>
            </div>
        );
    }
}

export default Deck;