import React from 'react';
import { TextField } from '@material-ui/core';
import { default as inputSetter } from "./hooks/UseInputState";


function EditTodoForm({ id, task, editTodo, setEditing }) {
    const [value, handleChange] = inputSetter(task);

    const handleEdit = e => {
        e.preventDefault();
        editTodo(id, value);
        setEditing();
    }

    return (
        <form onSubmit={handleEdit}
            style={{
                marginLeft: "1rem",
                width: "70%"
            }}>
            <TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
        </form>

    );
}

export default EditTodoForm;