import React, { Component } from "react";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleResubmitClick = this.handleResubmitClick.bind(this);

    this.state = {
      isEditing: false,
    };
  }

  handleEditClick() {
    this.setState({ isEditing: true });
  }

  handleResubmitClick() {
    this.setState({ isEditing: false });
  }

  EditButton(props) {
    return <button onClick={props.onClick}>Edit</button>;
  }

  ResubmitButton(props) {
    return <button onClick={props.onClick}>Resubmit</button>;
  }

  render() {
    const isEditing = this.state.isEditing;
    const EditButton = this.EditButton;
    const ResubmitButton = this.ResubmitButton;

    let button;
    if (isEditing) {
      button = <ResubmitButton onClick={this.handleResubmitClick} />;
    } else {
      button = <EditButton onClick={this.handleEditClick} />;
    }

    return <div>{button}</div>;
  }
}

export default TodoEdit;
