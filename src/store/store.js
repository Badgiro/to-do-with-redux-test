import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './slices/toDoSlice'

export default  configureStore({
    reducer:{
        todo:toDoReducer,
    },
})