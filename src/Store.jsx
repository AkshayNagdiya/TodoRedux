import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slice/TodoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
