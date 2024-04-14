import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        loginSlice: ''
    },
    reducers: {

        initLogin(state, action) {
            state.loginSlice =
                action.payload;
        }
    }
})

export const { initLogin } = loginSlice.actions;


export default loginSlice.reducer;
