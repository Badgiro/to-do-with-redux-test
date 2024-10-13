import {createSlice} from '@reduxjs/toolkit'

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        data:[],

    },
    reducers: {
        addToDo(state, action){
            state.data.push({
            id: Math.random(),
            title:action.payload.title, 
            completed: false
            })
           
        },
        removeTodo(state, action){
           state.data =  state.data.filter(toDoItem => 
            toDoItem.id !== action.payload.id)
        }
    }

})
export const {addToDo, removeTodo}= toDoSlice.actions
export default toDoSlice.reducer