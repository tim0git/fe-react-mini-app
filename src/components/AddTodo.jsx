import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
    dueDate: "",
  };

  createToDo = (event) => {
    event.preventDefault();
    this.props.addToDo({
      title: this.state.title,
      dueDate: this.state.dueDate,
    });
    this.setState({ title: "", dueDate: "" });
  };

  createNewTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  createNewDate = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  render() {
    return (
      <form className="newTodoForm" onSubmit={this.createToDo}>
        <label className="newTodoInput">
          <input className="input"
            type="text"
            name="title"
            placeholder="new todo..."
            value={this.state.title}
            onChange={this.createNewTitle}
          />
        </label>
        <label className="newTodoDate">
          <input
          className="input"
            type="date"
            name="todoDate"
            id="todoDate"
            value={this.state.dueDate}
            onChange={this.createNewDate}
          />
        </label>
        <label>
          <button className="createButton" type="submit">Submitt</button>
        </label>
      </form>
    );
  }
}

export default AddTodo;
