import { createSlice } from '@reduxjs/toolkit'

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    data: [],
  },
  reducers: {
    addToDo(state, action) {
      state.data.push({
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      })
    },
    removeTodo(state, action) {
      state.data = state.data.filter(
        (toDoItem) => toDoItem.id !== action.payload.id
      )
    },
    editTodo(state, action) {
      const { id, title } = action.payload
      const todo = state.data.find((todoItem) => todoItem.id === id)
      if (todo) {
        todo.title = title
      }
    },
  },
})
export const { addToDo, removeTodo, editTodo } = toDoSlice.actions
export default toDoSlice.reducer
