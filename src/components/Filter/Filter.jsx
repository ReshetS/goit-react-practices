import style from './Filter.module.css';
import { changeFilter, selectFilter } from '../../reduxTodo/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = event => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filterValue}
      onChange={handleChange}
    />
  );
};
