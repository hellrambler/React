import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    handleChange = (evt) => {
        this.setState({
            query: evt.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Search for a food!</h1>
                <input type="text" placeholder="food" value={this.state.query} onChange={this.handleChange} />

                <Link to={`/${this.state.query}`}>Search</Link>
            </div>
        );
    }
}

export default FoodSearch;