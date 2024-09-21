import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action) => {
      return action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const selectFilter = state => state.filter;
export const { changeFilter } = filterSlice.actions;
