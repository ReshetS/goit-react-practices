import { Grid, TodoListItem } from '..';

export const TodoList = ({ toDos }) => {
  return (
    <Grid>
      {toDos.map(({ id, text }, idx) => (
        <TodoListItem key={id} number={idx + 1} text={text} />
      ))}
    </Grid>
  );
};
