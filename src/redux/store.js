import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./reducers/content.reducer";


const store = configureStore({
    reducer: {
        content: contentReducer
    }
})

export default store;