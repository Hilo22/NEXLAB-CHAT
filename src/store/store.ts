import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import { saveState } from '../utils/storage';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

// Save to localStorage on every state change
store.subscribe(() => {
  saveState(store.getState().chat);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
