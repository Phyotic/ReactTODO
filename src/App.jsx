import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const value = localStorage.getItem("ITEM");

        if (value == null) {
            return [];
        }

        return JSON.parse(value);
    });

    const [editingTodoID, setEditingTodoId] = useState(null);

    useEffect(() => {
        localStorage.setItem("ITEM", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos((curTodos) => {
            return [...curTodos, { id: crypto.randomUUID(), title, completed: false }];
        });
    }

    function toggleTodo(id, completed) {
        setTodos((curTodos) => {
            return curTodos.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, completed };
                }

                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos((curTodos) => {
            return curTodos.filter((todo) => todo.id !== id);
        });
    }

    function updateTodo(id, newTitle, event) {
        event.preventDefault();

        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    todo.title = newTitle;
                    setEditingTodoId(null);
                }

                return todo;
            });
        });
    }

    function cancelTodo() {
        setEditingTodoId(null);
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo}></NewTodoForm>
            <h1 className="header">Todo List</h1>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={setEditingTodoId}
                editingTodoID={editingTodoID}
                updateTodo={updateTodo}
                cancelTodo={cancelTodo}
            ></TodoList>
        </>
    );
}
