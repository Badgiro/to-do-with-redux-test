import { useDispatch } from "react-redux";
import { removeTodo } from "../../../store/slices/toDoSlice";


const DeleteItem = ({ children, id }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
  
    dispatch(removeTodo({ id }));
  };

  return <button onClick={removeItem }>{children}</button>;
};

export default DeleteItem;
