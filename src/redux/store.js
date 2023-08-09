import { configureStore } from '@reduxjs/toolkit';
import markdownReducer from './reducers/markdownReducer';

const store = configureStore({
  reducer: {
    markdown: markdownReducer,
  },
});

export default store;
