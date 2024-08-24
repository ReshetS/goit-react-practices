import { Grid, TodoListItem } from '..';

export const TodoList = ({ toDos, onDeleteTodo }) => {
  return (
    <Grid>
      {toDos.map(({ id, text }, idx) => (
        <TodoListItem
          key={id}
          number={idx + 1}
          text={text}
          onDeleteTodo={onDeleteTodo}
          id={id}
        />
      ))}
    </Grid>
  );
};
