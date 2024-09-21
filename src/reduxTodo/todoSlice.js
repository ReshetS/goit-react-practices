import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilter } from './filterSlice';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], currentTodo: null },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map(item =>
        item.id === state.currentTodo.id
          ? { ...item, text: action.payload }
          : item,
      );
      state.currentTodo = null;
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo, deleteTodo, changeCurrentTodo, updateTodo } =
  todoSlice.actions;

export const selectTodos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
