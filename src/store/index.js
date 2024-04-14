import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './loginSlice';
import todoReducer from './todoSlice';
import notionReucer from './notionSlice';


export default configureStore(
    {
        reducer: {
            loginSlices: loginSlice,
            todos: todoReducer,
            notions: notionReucer
            // далее может быть user : userReducer
        }
    }
)