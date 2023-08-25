import rootReducer from './reducer/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer
})