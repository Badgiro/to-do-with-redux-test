import React from "react";
import { useState } from "react";
import { addToDo } from "../../store/slices/toDoSlice";
import { useDispatch } from "react-redux";

const ToDoForm = () => {
  const dispatch = useDispatch()
const [title, setTitle] = useState([])

const handleSubmit = (event) => {
  event.preventDefault()
  dispatch( addToDo({title}))
}
 

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} type="text" onChange={(event)=> setTitle(event.target.value)} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default ToDoForm;
