import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTodo,
  updateTodo,
  changeCurrentTodo,
} from 'reduxTodo/todoSlice';

export const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);
  const closeForm = () => {
    dispatch(changeCurrentTodo(null));
  };
  const onSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.text.value;
    dispatch(updateTodo(inputValue));
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={closeForm}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
