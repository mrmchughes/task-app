import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: { text: "", id: uniqid() },
      todos: [],
      isEditing: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleResubmitClick = this.handleResubmitClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      todo: {
        text: event.target.value,
        id: this.state.todo.id,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("A todo was submitted: " + this.state.todo);
    this.setState({
      todos: this.state.todos.concat(this.state.todo),
      todo: {
        text: "",
        id: uniqid(),
      },
    });
  }

  removeTodo(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((el) => el !== todo),
    }));
  }

  handleEditClick() {
    this.setState({ isEditing: true });
  }

  handleResubmitClick() {
    this.setState({ isEditing: false });
  }

  EditButton(props) {
    return <input type="submit" onClick={props.onClick} value="Edit" />;
  }

  ResubmitButton() {
    return (
      <input
        type="submit"
        onClick={this.handleResubmitClick}
        value="Resubmit current todo"
      />
    );
  }

  render() {
    const isEditing = this.state.isEditing;
    //const EditButton = this.EditButton;
    const ResubmitButton = this.ResubmitButton;

    let button;

    if (isEditing) {
      button = <ResubmitButton />;
    } else {
      button = (
        <input type="submit" onClick={this.handleSubmit} value="Submit" />
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo:{" "}
            <input
              type="text"
              value={this.state.todo.text}
              onChange={this.handleChange}
            />
          </label>
          {button}
        </form>
        <Overview
          todos={this.state.todos}
          isEditing={this.state.isEditing}
          removeTodo={this.removeTodo}
          EditButton={this.EditButton}
          ResubmitButton={this.ResubmitButton}
        />
      </div>
    );
  }
}

export default App;
//will handle the input field with the logic
