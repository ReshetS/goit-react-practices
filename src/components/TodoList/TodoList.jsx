import { Text, Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const filterTodos = useSelector(selectFilteredTodos);
  return (
    <>
      {filterTodos.length > 0 ? (
        <Grid>
          {filterTodos.map(({ id, text }, ind) => {
            return <Todo text={text} id={id} key={id} counter={ind + 1} />;
          })}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
