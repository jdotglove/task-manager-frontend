import { createContext } from 'react';

export const TaskManagerContext = createContext({
  user: undefined,
  setUser: undefined,
  deleteTasks: undefined,
  loadTasks: undefined,
  getTask: undefined,
});