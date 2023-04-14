import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchString: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    searchStringUpdated(state, action) {
      const { searchString } = action.payload;
      return { searchString };
    },
  },
});

export const { searchStringUpdated } = inputSlice.actions;

export default inputSlice.reducer;
