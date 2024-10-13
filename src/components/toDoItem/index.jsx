import { useState } from "react";
import styles from "./style.module.css";
import DeleteItem from "./deleteItem";






const ToDoitem = ({ title, completed, id }) => {

  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
 
  };
 


  return (
    <li className={`${styles.item} ${isChecked ? styles.itemChecked : ""}`}>
      <h1>{title}</h1>
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
