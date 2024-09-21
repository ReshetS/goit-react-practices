import { GridItem, Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeCurrentTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleChange = () => {
    dispatch(changeCurrentTodo({ text, id }));
  };
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={handleChange}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
