import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
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
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const todos = state.items.find((todo) => todo.id === id);
      todos.completed = !todos.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((todo) => todo.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((todo) => todo.completed === false);
      state.items = filtered;
    },
  },
});

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
