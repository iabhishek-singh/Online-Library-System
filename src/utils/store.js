import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./booksSlice";

const appStore = configureStore({ 
    reducer:{
        books: bookReducer,
    },
});


export default appStore;