import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: '',
    middleware: [thunkMiddleware]
}) 