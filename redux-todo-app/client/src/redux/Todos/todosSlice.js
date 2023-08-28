import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        // burda tek tek id eklemektense prepare kullanıyoruz
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
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

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  } else if (state.todos.activeFilter === "completed") {
    return state.todos.items.filter((todo) => todo.completed === true);
  } else if (state.todos.activeFilter === "active") {
    return state.todos.items.filter((todo) => todo.completed === false);
  }
};

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
