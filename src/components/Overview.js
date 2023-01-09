import React from "react";

function Overview(props) {
  const todos = props.todos;
  const removeTodo = props.removeTodo;
  const handleChangeEdit = props.handleChangeEdit;
  const isEditing = props.isEditing;
  const handleSubmit = props.handleSubmit;

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            Task {todos.indexOf(todo) + 1}: {todo.text} TodoID: {todo.id}
            <input
              type="button"
              value="Delete"
              onClick={removeTodo.bind(this, todo)}
            />
            <input
              type="button"
              value={isEditing ? "Resubmit" : "Edit"}
              onClick={
                isEditing
                  ? handleSubmit.bind(this, todo)
                  : handleChangeEdit.bind(this, todo)
              }
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Overview;
//send functions to button for edit and resubmit, state is now tied to App.js as the one source of truth
//
