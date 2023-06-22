import { useState } from 'react';

import { REACT_APP_TASK_MANAGER_API_URL } from '../constants';
import { TaskManagerContext } from '../contexts/TaskManagerContext';

export default function TaskManagerProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [tasks, setTasks] = useState([]);
  const deleteTask = async (taskId) => {
    try {
      const response = await (await fetch(`${REACT_APP_TASK_MANAGER_API_URL}/user/${user._id}/task/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })).json();
      if (response.error) {
        throw new Error(response.errorMessage);
      } else if (response.data) {
        setUser(response.data)
      } else {
        throw new Error('No response from server.');
      }
    } catch (error) {
      console.error('Error: ', error.message);
    }
  }
  const loadTasks = async () => {
    try {
      const response = await (await fetch(`${REACT_APP_TASK_MANAGER_API_URL}/user/${user._id}/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })).json();
      if (response.error) {
        throw new Error(response.errorMessage);
      } else if (response.data) {
        setTasks(response.data);
      } else {
        throw new Error('No response from server.');
      }
    } catch (error) {
      console.error('Error: ', error.message);
    }
  }
  return (
    <TaskManagerContext.Provider value={{
      user,
      tasks,
      deleteTask,
      loadTasks,
      setTasks,
      setUser,
    }}>
      {children}
    </TaskManagerContext.Provider>
  );
}