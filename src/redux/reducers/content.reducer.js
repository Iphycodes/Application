import { createSlice } from "@reduxjs/toolkit";
import CONTENT_DATA from "../../CONTENT_DATA";


const INITIAL_STATE = {
    contents: CONTENT_DATA
}

const contentSlice = createSlice({
    name: 'content',
    initialState: INITIAL_STATE,
    reducers: {

    }
})

export default contentSlice.reducer();