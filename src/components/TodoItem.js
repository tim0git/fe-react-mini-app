import React from "react";

export default function TodoItem(props) {
    const { id, title, dueDate, complete } = props.todo;
    console.log(new Date(dueDate));
    return (
        <div className={complete ? "todoItemDone" : "todoItem"}>
        <p>
          <input type="checkbox" onChange={() => props.markComplete(id)} />
          <span>
            {"  "}
            {title}
            {"  "}
          </span>
          <span className={new Date() < new Date(dueDate) ? "dueDate":"overDueDate"}>{dueDate}</span>
          <button
            className="deleteButton"
            onClick={() => props.deleteTodo(id)}
          >
            X
          </button>
        </p>
      </div>
    )
}
