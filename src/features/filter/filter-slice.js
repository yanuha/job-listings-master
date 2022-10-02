import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: '@@filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => [],
  },
});

export const { addFilter, removeFilter, clearFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

export const selectFilters = (state) => state.filters;
