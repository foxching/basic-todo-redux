import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  render() {
    const { todos, handleViewSelectedTodo, handleDeleteTodo } = this.props
    return (
      <div>
        <ul className="list-group my-3">
          <h3 className="text-capitalize text-center">Todo List</h3>
          {todos.length ? todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleViewSelectedTodo={handleViewSelectedTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          )) : (
              <p className="text-center text-muted my-2">No todos found</p>
            )
          }

        </ul>
      </div>

    );
  }

}

export default TodoList;
