import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addTodo, updateTodo } from '../store/actions/todoActions'

const emptyTodo = {
  id: '',
  title: ''
}

class TodoInput extends Component {
  state = {
    todo: emptyTodo,
    text: 'Saved'
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTodo !== this.props.selectedTodo) {
      this.setState({
        todo: nextProps.selectedTodo || emptyTodo,
        text: 'Update'
      });
    }
  }


  handleChange = (e) => {
    const newTodo = this.state.todo
    newTodo[e.target.name] = e.target.value
    this.setState({
      todo: newTodo
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      ...this.state.todo,
      id: uuid()
    }



    if (this.state.todo.id) {
      this.props.updateTodo(this.state.todo)
      this.setState({
        text: 'Saved'
      })
    } else {
      if (newTodo.title.length === 0) {
        alert('please enter a value')
      } else {
        this.props.addTodo(newTodo)
      }

    }

    this.setState({
      todo: {
        title: ''
      }

    })

  }

  renderClass = () => {
    return this.state.text === 'Saved'
      ? 'btn btn-success btn-block'
      : 'btn  btn-warning btn-block'
  }


  render() {
    const { todo, text } = this.state


    return (
      <div className="card card-body my-3">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              name="title"
              type="text"
              className="form-control text-capitalize"
              placeholder="Add todo item"
              value={todo.title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className={this.renderClass()}>
            {text}
          </button>
        </form>

      </div>

    );
  }

}

const actions = {
  addTodo,
  updateTodo
}

export default connect(null, actions)(TodoInput);
