import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotinonsAsync = createAsyncThunk(
    'notion/getNotinonsAsync',
    async function (_, rejectWithValue) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            if (response.status !== 200) {
                throw new Error('Что-то пошло не так');
            }
            return response.data;
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    }
);
export const getOneNotionAsync = createAsyncThunk(
    'notion/getOneNotionAsync',
    async function (id, rejectWithValue) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
            if (response.status !== 200) {
                throw new Error('Что-то пошло не так');
            }

            return response.data;
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    }
);

export const postNotionAsync = createAsyncThunk(
    'notion/createAsyncThunk',
    async function (body, { rejectWithValue, dispatch }) {
        try {
            const response = await axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                data: body
            });
            if (response.status !== 201) {
                throw new Error('Что-то пошло не так');
            }
            dispatch(addNotion(body));
            return response.data;
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    }
)

export const patchNotionAsync = createAsyncThunk(
    'notion/patchNotionAsync',
    async function (body, { rejectWithValue, dispatch }) {
        const response = await axios({
            method: 'patch',
            url: 'https://jsonplaceholder.typicode.com/posts/' + body.id,
            data: body
        })
        if (response.status !== 200) {

            throw new Error('Что-то пошло не так');
        }
        dispatch(editNotion(body));
    }
);

export const deleteNotionAsync = createAsyncThunk(
    'notion/deleteNotionAsync',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await axios({
                method: 'delete',
                url: 'https://jsonplaceholder.typicode.com/posts/' + id,
            })
            if (response.status !== 200) {
                throw new Error('Что-то пошло не так');
            }
            dispatch(deleteNotion({ id }))
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const setLoading = (state, action) => {
    state.status = 'loading';
    state.error = null;
}

const notionSlice = createSlice({
    name: 'notion',
    initialState: {
        notions: [],
        oneNotinon: {},
        status: null,
        error: null
    },
    reducers: {

        addNotion(state, action) {
            state.notions.unshift(action.payload)
        },
        deleteNotion(state, action) {
            state.notions = state.notions.filter(notion => notion.id !== action.payload.id);
        },
        editNotion(state, action) {
            state.notions = state.notions.map(
                notion => {
                    if (notion.id !== action.payload.id) return notion;
                    return {
                        ...notion,
                        userId: action.payload.userId,
                        title: action.payload.title,
                        body: action.payload.body
                    }
                }
            )
        }
    },
    extraReducers: {
        [getNotinonsAsync.pending]: setLoading,
        [getOneNotionAsync.pending]: setLoading,

        [getNotinonsAsync.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.notions = action.payload;
        },

        [getOneNotionAsync.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.oneNotinon = action.payload;
        },

        [getNotinonsAsync.rejected]: setError,
        [getOneNotionAsync.rejected]: setError,

    },
});


export const { addNotion, deleteNotion, editNotion } = notionSlice.actions;

export default notionSlice.reducer;