import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuid } from "uuid";

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    return {
        todos,
        addTodo: (newTodo) => {
            setTodos([...todos, { id: uuid(), task: newTodo, completed: false }])
        },
        removeTodo: (todoId) => {
            setTodos(todos.filter(todo => todo.id !== todoId));
        },
        editTodo: (todoId, newTask) => {
            setTodos(todos.map(
                todo => {
                    if (todo.id === todoId) {
                        todo.task = newTask;
                    }
                    return todo;
                }
            ));
        },
        toggleTodo: (todoId) => {
            setTodos(todos.map(
                todo => {
                    if (todo.id === todoId) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                }
            ));
        }


    }
}