import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    addressValid: false,
};

const address = createSlice({
    name: "address",
    initialState,
    reducers: {
        addressValidAC(state, action) {
            state.addressValid = action.payload
        }
    },
});

export const {
    addressValidAC,
} = address.actions;
export default address.reducer;
