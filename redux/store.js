import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { movieReducer } from './movie/movieReducer';

const store = configureStore({
    reducer: movieReducer,
    middleware: [thunkMiddleware]
});

export default store;