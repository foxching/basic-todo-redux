import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { todo, handleViewSelectedTodo, handleDeleteTodo } = this.props
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{todo.title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={(e) => handleViewSelectedTodo(todo)}  >
            <i className="fas fa-pen" ></i>
          </span>
          <span className="mx-2 text-danger" onClick={(e) => handleDeleteTodo(todo.id)}>
            <i className="fas fa-trash" ></i>
          </span>

        </div>

      </li>

    );
  }

}

export default TodoItem;
