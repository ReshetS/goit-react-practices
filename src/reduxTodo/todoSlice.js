import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo } = todoSlice.actions;

export const selectTodos = state => state.todos.items;
