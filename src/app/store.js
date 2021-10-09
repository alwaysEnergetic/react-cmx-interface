import { configureStore } from '@reduxjs/toolkit';
import fetchName from '../features/inputName';

export const store = configureStore({
  reducer: {
    name: fetchName,
  },
});
