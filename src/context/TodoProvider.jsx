import { createContext, useContext, useState } from 'react';

import initialDate from '../fake-date/data.json';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialDate);
  return <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>;
};

export const useTodos = () => useContext(TodoContext);
