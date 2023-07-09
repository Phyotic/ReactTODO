import { TodoItem } from "./TodoItem";
import { EditTodoItem } from "./EditTodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo, editingTodoID, updateTodo, cancelTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}

            {todos.map((todo) => {
                return todo.id === editingTodoID ? (
                    <li key={todo.id}>
                        <EditTodoItem id={todo.id} title={todo.title} updateTodo={updateTodo} cancelTodo={cancelTodo} />
                    </li>
                ) : (
                    <li key={todo.id}>
                        <TodoItem
                            id={todo.id}
                            completed={todo.completed}
                            title={todo.title}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
