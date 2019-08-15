import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo} from './store/actions/todoActions'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    todoSelected:null
  }

  handleViewSelectedTodo = selectedTodo => {
    this.setState({
      todoSelected: selectedTodo
    })

  }

  handleDeleteTodo = id => {
   this.props.deleteTodo(id)
  }


  render() {
    const { todos } = this.props
    const {todoSelected} = this.state
   
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4 ">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              selectedTodo={todoSelected}
            />
            <TodoList
              todos={todos}
              handleViewSelectedTodo={this.handleViewSelectedTodo}
              handleDeleteTodo={this.handleDeleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }

}

const mapState = (state) => {
  return {
    todos: state.todos
  }
}

const actions = {
  deleteTodo
}
export default connect(mapState, actions)(App);
