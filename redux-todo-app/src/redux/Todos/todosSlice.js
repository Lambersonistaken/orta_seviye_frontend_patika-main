import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Learn React",
      completed: true,
    },
    {
      id: 2,
      title: "Learn Redux",
      completed: false,
    },
    {
      id: 3,
      title: "Learn Redux Toolkit",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const todos = state.find((todo) => todo.id === id);
      todos.completed = !todos.completed;
    },
  },
});

export const { addTodo, toggle } = todosSlice.actions;
export default todosSlice.reducer;
