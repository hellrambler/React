import React from 'react';
import { default as toggleState } from "./hooks/UseToggle";
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {

    const [isEditing, setEditing] = toggleState(false);

    const handleRemove = () => {
        removeTodo(id);
    }

    const handleToggle = () => {
        toggleTodo(id);
    }

    const handleEdit = () => {
        setEditing();
    }

    return (

        <>
            <ListItem style={{ height: "64px" }}>
                {isEditing ? <EditTodoForm id={id} task={task} editTodo={editTodo} setEditing={setEditing} /> :
                    <>
                        <Checkbox tabIndex={-1} checked={completed} onClick={handleToggle} />
                        <ListItemText style={{
                            textDecoration: completed ? "line-through" : "None"
                        }}>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Edit" onClick={handleEdit}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="Delete" onClick={handleRemove}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>}
            </ListItem>

        </>

    );
}

export default Todo;