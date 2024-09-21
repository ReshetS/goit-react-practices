import { Text, Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      {todos.length > 0 ? (
        <Grid>
          {todos.map(({ id, text }, ind) => {
            return <Todo text={text} id={id} key={id} counter={ind + 1} />;
          })}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
