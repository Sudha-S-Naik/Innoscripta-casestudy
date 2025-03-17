/* This code snippet is setting up a Redux store using the `@reduxjs/toolkit` library in a TypeScript
environment. Here's a breakdown of what each part is doing: */
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;