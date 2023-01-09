import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

import db from "../Firestore.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: { text: "", id: uniqid() },
      todos: [],
      isEditing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
  }

  handleChange(event) {
    this.setState({
      todo: {
        text: event.target.value,
        id: this.state.todo.id,
      },
    });
    console.log("event.target.value: " + event.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    db.settings({
      timestampsInSnapshots: true,
    });

    const todosRef = db.collection("todos").add({
      text: this.state.todo.text,
      id: this.state.todo.id,
    });

    this.setState({
      todos: this.state.todos.concat(this.state.todo),
      todo: {
        text: "",
        id: uniqid(),
      },
      isEditing: false,
    });
  };

  removeTodo(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((el) => el !== todo),
    }));
  }

  handleChangeEdit(todo) {
    this.setState({ isEditing: true });
    console.log(todo);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo:{" "}
            <input
              id="todoInput"
              type="text"
              value={this.state.todo.text}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Overview
          todos={this.state.todos}
          isEditing={this.state.isEditing}
          removeTodo={this.removeTodo}
          handleChangeEdit={this.handleChangeEdit}
          handleSubmit={this.handleSubmit}
          handleChangeSubmit={this.handleChangeSubmit}
        />
      </div>
    );
  }
}

export default App;
//will handle the input field with the logic
