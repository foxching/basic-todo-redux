import { ADD_TODO, DELETE_TODO, UPDATE_TODO} from './todoActionTypes'

export const addTodo = (todo) => {
  return {
    type:ADD_TODO,
    todo
  }
}

export const deleteTodo = (id) => {
  return {
    type:DELETE_TODO,
    id
  }
}

export const updateTodo = (id, updatedTodo) => {
  return {
    type:UPDATE_TODO,
    id,
    updatedTodo
  }
}