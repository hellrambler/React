import React, { Component } from 'react';
import axios from "axios";
import smileFace from "./Assets/smile.svg"
import "./JokeList.css"
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

class JokeList extends Component {
    static defaultProps = {
        numToGet: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            isLoading: false
        };
    }

    componentDidMount() {
        if (!window.localStorage.getItem("jokes")) {
            this.addJokes();
        } else {
            let jokes = JSON.parse(window.localStorage.getItem('jokes'));
            this.setState({
                jokes
            });
        }
    }

    handleVote = (id, delta) => {
        this.setState(
            st => ({
                jokes: st.jokes.map(j => {
                    if (j.id === id) {
                        return { ...j, votes: j.votes + delta }
                    } else {
                        return j
                    }
                })
            }),
            () => {
                window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
            }
        );
    }

    addJokes = async () => {

        let currJokes = JSON.parse(window.localStorage.getItem('jokes') || "[]");
        const jokeContent = new Set(currJokes.map(j => j.joke));
        let count = 0;
        try {
            while (count < this.props.numToGet) {
                let res = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
                let joke = res.data.joke;
                if (!jokeContent.has(joke)) {
                    currJokes.push({ joke, votes: 0, id: uuid() });
                    count++;
                }
            }

            this.setState(st => ({
                jokes: currJokes
            }), () => {
                window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
            });
        } catch (e) {
            alert(e);
        } finally {
            this.setState({
                isLoading: false
            })
        }
    }

    handleAdd = () => {
        this.setState({
            isLoading: true
        }, this.addJokes);
    }

    handleRemove = () => {
        this.setState({
            jokes: []
        }, () => {
            window.localStorage.clear();
        });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div className='JokeList-spinner'>
                    <i className="fa-solid fa-8x fa-spin fa-face-grin-squint-tears"></i>
                    <div className='JokeList-title'>Loading</div>
                </div>
            )
        }

        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

        const jokesDiv = jokes.map(j => (
            <Joke key={j.id} id={j.id} votes={j.votes} text={j.joke} vote={this.handleVote} />
        ));
        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'>
                        <span>Dad</span> Jokes
                    </h1>
                    <img className='JokeList-smile' src={smileFace} alt="Smile" />
                    <button className='JokeList-getmore' onClick={this.handleAdd}>More Jokes</button>
                    <button className='JokeList-clear' onClick={this.handleRemove}>Clear All</button>
                </div>
                <div className='JokeList-jokes'>
                    {jokesDiv}
                </div>
            </div>
        );
    }
}

export default JokeList;