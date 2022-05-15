import React, { Component } from 'react';
import "./Joke.css"

class Joke extends Component {

    getEmoji = () => {
        let vote = this.props.votes;
        if (vote >= 15) {
            return "em em-rolling_on_the_floor_laughing";
        } else if (vote >= 10) {
            return "em em-laughing";
        } else if (vote >= 5) {
            return "em em-smiley";
        } else if (vote >= 0) {
            return "em em-neutral_face";
        } else {
            return "em em-confused";
        }
    }

    getColor = () => {
        let vote = this.props.votes;
        if (vote >= 15) {
            return "#4CAF50";
        } else if (vote >= 10) {
            return "#8BC34A";
        } else if (vote >= 5) {
            return "#CDDC39";
        } else if (vote >= 0) {
            return "#FFC107";
        } else {
            return "#f44336";
        }
    }

    upvote = () => {
        this.props.vote(this.props.id, 1);
    }
    downvote = () => {
        this.props.vote(this.props.id, -1);
    }
    render() {
        return (
            <div className='Joke'>
                <div className='Joke-btn'>
                    <i className='fa-solid fa-thumbs-up' onClick={this.upvote} />
                    <span className='Joke-votes' style={{ borderColor: this.getColor() }}>{this.props.votes}</span>
                    <i className='fa-solid fa-thumbs-down' onClick={this.downvote} />
                </div>
                <div className='Joke-text'>
                    {this.props.text}
                </div>
                <div className='Joke-emoji'>
                    <i className={this.getEmoji()}></i>
                </div>
            </div>
        );
    }
}

export default Joke;