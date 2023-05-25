import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        category: "Category",
        dateS: "Start Date",
        dateE: "End Date",
    },
    reducers:{
        chooseCategory: (state, action) => {state.category = action.payload},
        chooseDateS: (state, action) => {state.dateS = action.payload},
        chooseDateE: (state, action) => {state.dateE = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCategory, chooseDateE, chooseDateS } = rootSlice.actions