import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={props.markComplete}
      deleteTodo={props.deleteTodo}
    />
  ));
}
