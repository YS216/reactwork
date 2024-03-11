import { configureStore, createSlice } from "@reduxjs/toolkit";

let todos = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 0,
      isDone: false,
      content: "📖 React 공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "✏️ Spring boot study",
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "🎬 영화감상",
      date: new Date().getTime(),
    },
  ],

  reducers : {
    onCreate : (state, action) => {
      const newItem = {
        id: action.payload.id,
        isDone: false,
        content: action.payload.content,
        date: new Date().getTime()
      }
      return([newItem, ...state])
    },
    onUpdate : (state, action) => {
      return(todos.map(todo => 
        todo.id == action.payload ? {...todo, isDone: !todo.isDone} : todo
        )
      )
    },
    onDelete : (state, action) => {
      return(state.filter((todo)=>todo.id != action.payload))
    }
  }
});

export const {onCreate, onUpdate, onDelete} = todos.actions;

export default configureStore({
  reducer : {
    todos : todos.reducer
  }
})
