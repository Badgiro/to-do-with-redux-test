import { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteItem from "./deleteItem";
import { editTodo } from "../../store/slices/toDoSlice";
import styles from "./style.module.css";








const ToDoitem = ({ title, completed, id }) => {
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value)
  }


  const edit = () => {
    setIsEditing(!isEditing)
  }


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const saveTitle = ()=> {
    dispatch(editTodo({title:newTitle, id} ))
    setIsEditing(false)
  }
 


  return (
    <li className={`${styles.item} ${isChecked ? styles.itemChecked : ""}`}>
      {isEditing
      ? 
        <input type="text" onChange={handleNewTitle} value={newTitle} onBlur={saveTitle} autoFocus/>
      : 
        <h1 onClick={edit}>{title}</h1>
    
    }



      
      <input
        className={styles.item__checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={() => handleCheckboxChange()}
      />
      <DeleteItem id={id}>удалить </DeleteItem>
    </li>
  );
};

export default ToDoitem;
