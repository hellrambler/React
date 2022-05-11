import React, { Component } from 'react';
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css"

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        this.setState(
            { task: "" }
        );
    }

    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Item</label>
                <input
                    type="text"
                    placeholder='New Todo'
                    id='task'
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Item</button>
            </form>
        );
    }
}

export default NewTodoForm;