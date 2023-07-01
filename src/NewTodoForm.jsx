import { useState } from "react";

export function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if(newItem === "") {
            return;
        }

        props.onSubmit(newItem);

        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label id="itemLable" htmlFor="item">New Todo: </label>
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>

            <button id="addTodoButton" className="btn">Add</button>
        </form>
    )
}