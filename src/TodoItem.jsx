export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li key={id}>
            <label className="itemLabel">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => {
                        toggleTodo(id, e.target.checked)
                    }}
                />
                <span className={completed ? "strikethrough" : ""}>{title}</span>
            </label>

            <button
                className="btn btn-danger"
                onClick={() => deleteTodo(id)}
            >
                Delete
            </button>
        </li>
    )
}