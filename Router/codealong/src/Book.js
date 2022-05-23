import React, { Component } from 'react';

class Book extends Component {
    name = useParams();
    render() {
        return (
            <div>
                <h1>I am reading {this.name}</h1>
            </div>
        );
    }
}

export default Book;