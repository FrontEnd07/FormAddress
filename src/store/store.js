import {configureStore} from "@reduxjs/toolkit";
import address from "./reducers/Order/address";
import pay from "./reducers/Order/pay";

export const store = configureStore({
    reducer: {
        address: address,
        pay: pay,
    },
    devTools: true
})

window.store = store;
