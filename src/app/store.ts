import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from '../features/input/apiSlice';

import inputReduces from '../features/input/inputSlice';

export default configureStore({
  reducer: {
    input: inputReduces,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
