import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchString: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    searchStringUpdated(state, action) {
      console.log('action:', action)
      const { searchString } = action.payload;
      console.log('state: searchString: ', searchString);
      console.log('state:', state.searchString);
      return { searchString };
    },
  },
});

export const { searchStringUpdated } = inputSlice.actions;

export default inputSlice.reducer;
