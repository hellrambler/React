import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    create = (task) => {
        this.setState(
            st => ({
                todos: [...st.todos, task]
            })
        )
    }
    remove = (id) => {
        this.setState(
            st => ({
                todos: st.todos.filter(todo =>
                    todo.id !== id
                )
            })
        )
    }

    edit = (id, task) => {
        this.setState(
            st => ({
                todos: st.todos.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, task };
                    } else {
                        return todo;
                    }
                })
            })
        )
    }

    toggleCompletion = (id) => {
        this.setState(
            st => ({
                todos: st.todos.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
            })
        )
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    removeTodo={this.remove}
                    editTodo={this.edit}
                    completed={todo.completed}
                    toggleTodo={this.toggleCompletion}
                />
            )
        })
        return (
            <div className='TodoList'>
                <h1>Todo List <span>A Simple React Todo List App.</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createTodo={this.create} editTodo={this.edit} />
            </div>
        );
    }
}

export default TodoList;