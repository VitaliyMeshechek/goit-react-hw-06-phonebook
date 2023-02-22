import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  filter: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions; // генераторы действий
export const filterReducer = filterSlice.reducer;
