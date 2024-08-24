import { Text, Form, TodoList } from 'components';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos ? savedTodos : [];
  });

  function handleSubmit(value) {
    setTodos(prevTodos => [...prevTodos, { text: value, id: nanoid() }]);
  }

  function deleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {todos.length === 0 ? (
        <Text textAlign="center">There are no any todos ...</Text>
      ) : (
        <TodoList toDos={todos} onDeleteTodo={deleteTodo} />
      )}
    </>
  );
};
