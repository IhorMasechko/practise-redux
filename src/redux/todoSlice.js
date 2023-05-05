import { createSlice } from '@reduxjs/toolkit';
import { addTodos, deleteTodos, getTodos } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
  //   reducers: {
  //     addTodo: (state, action) => {
  //       state.todos = [...state.todos, action.payload];
  //     },
  //     deleteTodo: (state, action) => {
  //       state.todos = state.todos.filter(todo => todo.id !== action.payload);
  //     },
  //   },
  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, handlePending)
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(getTodos.rejected, handleRejected)
      .addCase(addTodos.pending, handlePending)
      .addCase(addTodos.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload];
      })
      .addCase(addTodos.rejected, handleRejected)
      .addCase(deleteTodos.pending, handlePending)
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(deleteTodos.rejected, handleRejected);
  },
});
// export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
