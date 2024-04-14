import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            if (response.status !== 200) {
                throw new Error('Что-то пошло не так');
            }
            return response.data;
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    },


);
export const patchTodoAsync = createAsyncThunk(
    'todos/patchTodoAsync',
    async function (id, { rejectWithValue, dispatch, getState }) {
        try {
            const todo = getState().todos.todos.find(todo => todo.id === id)
            const response = await axios({
                method: 'patch',
                url: 'https://jsonplaceholder.typicode.com/todos/' + id,
                data: {
                    completed: !todo.completed
                }
            })
            if (response.status !== 200) {
                throw new Error('Что-то пошло не так');
            }
            dispatch(ToggleToDo({ id }));
            return { id };
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    }
)

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await axios({
                method: 'delete',
                url: 'https://jsonplaceholder.typicode.com/todos/' + id,
            })
            if (response.status !== 200) {
                throw new Error('Что-то пошло не так');
            }
            dispatch(removeTodo({ id }));
            return response.data;
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    }
);
export const postTodoAsync = createAsyncThunk(
    'todos/postTodoAsync',
    async function (data, { rejectWithValue, dispatch }) {
        try {
            const body = {
                id: new Date().toISOString(),
                title: data.title,
                completed: false
            }
            const response = await axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/todos/',
                data: body
            });
            if (response.status !== 201) {
                throw new Error('Что-то пошло не так');
            }
            dispatch(addTodo(body));
            return response.data;

        }
        catch (error) {
            rejectWithValue(error.message)
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}


const todoSlice = createSlice({


    name: 'todo',


    initialState: {
        todos: [],
        status: null,
        error: null,
    },


    reducers: {

        addTodo(state, action) {
            state.todos.unshift(
                action.payload
            );
        },
        removeTodo(state, action) {

            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        ToggleToDo(state, action) {
            state.todos = state.todos.map(
                todo => {
                    if (todo.id !== action.payload.id) return todo;
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            )
        },
    },
    extraReducers: {
        [getTodosAsync.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [getTodosAsync.rejected]: setError,
        [patchTodoAsync.rejected]: setError,
        [deleteTodoAsync.rejected]: setError,
        [postTodoAsync.rejected]: setError,
    },
})


export const { addTodo, removeTodo, ToggleToDo } = todoSlice.actions;


export default todoSlice.reducer;