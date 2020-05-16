import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import SortTodo from "./components/SortTodo";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "catch up with dave",
        complete: false,
        dueDate: "2020/06/01",
      },
      {
        id: 2,
        title: "create funcitonality",
        complete: false,
        dueDate: "2002/06/01",
      },
      {
        id: 3,
        title: "Add due date..",
        complete: false,
        dueDate: "2003/06/02",
      },
      {
        id: 4,
        title: "Sort by due date..",
        complete: false,
        dueDate: "20205/06/02",
      },
    ],
  };

  sortTodo = () => {
    this.setState((currentState) => {
      return {
        todos: currentState.todos.sort((a, b) => {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }),
      };
    });
  };

  deleteTodo = (id) => {
    this.setState((currentState) => {
      return {
        todos: [
          ...currentState.todos.filter((item) => {
            return item.id !== id;
          }),
        ],
      };
    });
  };

  addToDo = (props) => {
    //console.log(props.title);
    const newToDo = {
      id: Math.floor(Math.random() * 1000),
      title: props.title,
      dueDate: props.dueDate,
      complete: false,
    };
    this.setState({ todos: [newToDo, ...this.state.todos] });
  };

  markComplete = (id) => {
    console.log(id);
    this.setState((currentState) => {
      return {
        todos: currentState.todos.map((todo) => {
          if (todo.id === id) {
            todo.complete = !todo.complete;
          }
          return todo;
        }),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addToDo={this.addToDo} />
        <SortTodo sortTodo={this.sortTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
