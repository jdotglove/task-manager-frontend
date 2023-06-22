import { createContext } from 'react';

export const TaskManagerContext = createContext({
  user: undefined,
  setUser: undefined,
  loadTasks: undefined,
  getTask: undefined,
});