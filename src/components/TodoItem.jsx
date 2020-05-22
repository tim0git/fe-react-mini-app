import React from "react";
import moment from "moment";

export default function TodoItem(props) {
  const { id, title, dueDate, complete } = props.todo;
  console.log(new Date(dueDate));
  return (
    <div className={complete ? "todoItemDone" : "todoItem"}>
      <p>
        <input
          className="checkBox"
          type="checkbox"
          onChange={() => props.markComplete(id)}
        />
        <span>
          {"  "}
          {title}
          {"  "}
        </span>
        <br />
        <span
          className={new Date() < new Date(dueDate) ? "dueDate" : "overDueDate"}
        >
          {moment(dueDate).format("dddd Do MMM YY")}
        </span>
        <button className="deleteButton" onClick={() => props.deleteTodo(id)}>
          X
        </button>
      </p>
    </div>
  );
}
