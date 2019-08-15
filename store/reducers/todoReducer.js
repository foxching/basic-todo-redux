import { ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../actions/todoActionTypes'


const initialState = [{id:'asass', title:'love'}]

const todoReducer = (state=initialState, action) => {
  switch(action.type){
    case ADD_TODO:
    return [...state, action.todo]
    case DELETE_TODO:
    return state.filter(({ id }) => id !== action.id);
    case UPDATE_TODO:
    return state.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						...action.updatedTodo
					};
				} else {
					return todo;
				}
			});
    default:
    return state
  }
}

export default todoReducer