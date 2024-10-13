import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from '../toDoItem'


const ToDoList = () => {
const toDoItems = useSelector((state)=> {
   return state.todo.data
})

  return (
    <ul>
      {toDoItems.map(toDoItem => {
      return <ToDoItem key={toDoItem.id} id={toDoItem.id} title={toDoItem.title} completed={toDoItem.completed}  />
      })}
    </ul>
  )
}

export default ToDoList
