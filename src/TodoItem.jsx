export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
    return (
        <>
            <label className="itemLabel">
                <input
                    type="checkbox"
                    name="title"
                    checked={completed}
                    onChange={(e) => {
                        toggleTodo(id, e.target.checked);
                    }}
                />
                <span className={completed ? "strikethrough content" : "content"}>{title}</span>
            </label>
            <button className="btn list-button" onClick={() => editTodo(id)}>
                Edit
            </button>
            <button className="btn list-button" onClick={() => deleteTodo(id, title)}>
                Delete
            </button>
        </>
    );
}
