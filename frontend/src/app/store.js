import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import billReducer from '../features/bill/billSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bill: billReducer
  },
});
