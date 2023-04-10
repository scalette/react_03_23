import { configureStore } from '@reduxjs/toolkit';

import inputReduces from '../features/input/inputSlice';

export default configureStore({
  reducer: {
    input: inputReduces,
  },
})
