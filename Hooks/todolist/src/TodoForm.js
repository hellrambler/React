import { Paper, TextField } from '@material-ui/core';
import React from 'react';
import { default as inputSetter } from "./hooks/UseInputState";


function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = inputSetter("")

    const handleAdd = e => {
        e.preventDefault();
        addTodo(value);
        reset()
    };

    return (
        <Paper style={{
            margin: "1rem 0",
            padding: "0 1rem"
        }}>
            <form onSubmit={handleAdd}>
                <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth />
            </form>
        </Paper>
    );
}

export default TodoForm;