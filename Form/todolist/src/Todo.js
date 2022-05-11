import React, { Component } from 'react';
import "./Todo.css"

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            task: this.props.task
        }
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id);
    }

    handleToggle = () => {
        this.setState(st => ({
            isEdit: !st.isEdit
        }));
    }

    handleChange = (evt) => {
        this.setState(
            { [evt.target.name]: evt.target.value }
        )
    }

    handleUpdate = (evt) => {
        evt.preventDefault();
        this.setState(st => ({
            isEdit: !st.isEdit
        }));
        this.props.editTodo(this.props.id, this.state.task);
    }

    handleToggle = () => {
        this.props.toggleTodo(this.props.id);
    }

    render() {

        let display;

        if (this.state.isEdit) {
            display = (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            display = (
                <div className='Todo'>

                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>{this.props.task}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.handleUpdate}>
                            <i className='fas fa-pen' />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i className='fas fa-trash' />
                        </button>
                    </div>
                </div>
            )
        }

        return display;
    }
}

export default Todo;