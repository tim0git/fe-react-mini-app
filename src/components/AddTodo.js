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
      <form action="" onSubmit={this.createToDo}>
        <label htmlFor="">
          <input
            type="text"
            name="title"
            placeholder="new todo..."
            className="newTodo"
            value={this.state.title}
            onChange={this.createNewTitle}
          />
        </label>
        <label htmlFor="todoDate">
          <input
            type="date"
            name="todoDate"
            id="todoDate"
            value={this.state.dueDate}
            onChange={this.createNewDate}
          />
        </label>
        <label>
          <button type="submit" className="button">
            Submitt
          </button>
        </label>
      </form>
    );
  }
}

export default AddTodo;
