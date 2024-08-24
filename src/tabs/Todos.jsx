import { Text, Form, TodoList } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  function handleSubmit(value) {
    setTodos(prevTodos => [...prevTodos, { text: value, id: nanoid() }]);
  }

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={handleSubmit} />
      <TodoList toDos={todos} />
    </>
  );
};
