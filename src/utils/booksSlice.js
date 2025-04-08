import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./mockData";

const booksSlice = createSlice({
    name: "books",
    initialState: {
        list: Books,
    },
    reducers: {
        addBook: (state, action) => {
            state.list.push(action.payload);
        }
    },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;