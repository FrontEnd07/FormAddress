import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    payValid: false,
};

const pay = createSlice({
    name: "pay",
    initialState,
    reducers: {
        payValidAC(state, action) {
            state.payValid = action.payload
        }
    },
});

export const {
    payValidAC,
} = pay.actions;
export default pay.reducer;
