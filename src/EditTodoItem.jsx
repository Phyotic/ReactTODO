import { useState } from "react";

export function EditTodoItem({ id, title, updateTodo, cancelTodo }) {
    const [newTitle, setNewTitle] = useState(title);

    return (
        <>
            <form
                id="editForm"
                onSubmit={(event) => {
                    updateTodo(id, newTitle, event);
                }}
            >
                <input
                    id="editText"
                    type="text"
                    autoFocus
                    value={newTitle}
                    onChange={(e) => {
                        setNewTitle(e.target.value);
                    }}
                />

                <button type="submit" className="btn edit-list-button">
                    Confirm
                </button>
                <button type="button" className="btn edit-list-button" onClick={() => cancelTodo(id)}>
                    Cancel
                </button>
            </form>
        </>
    );
}
