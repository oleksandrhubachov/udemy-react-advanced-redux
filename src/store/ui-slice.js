import {createSlice} from "@reduxjs/toolkit";
// import { current } from '@reduxjs/toolkit'

let initialState = {showCart: false};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
