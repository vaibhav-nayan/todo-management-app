// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../features/exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
