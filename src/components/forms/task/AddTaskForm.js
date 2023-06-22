import { useContext } from 'react';

import BaseTaskForm from './BaseTaskForm';
import { REACT_APP_TASK_MANAGER_API_URL } from '../../../constants';
import { TaskManagerContext } from '../../../contexts/TaskManagerContext';

export default function AddTaskForm({
  open,
  setOpen
}) {
  const { user, setUser } = useContext(TaskManagerContext);
  const addNewTask = async (task) => {
    try {
      const response = await (await fetch(`${REACT_APP_TASK_MANAGER_API_URL}/user/${user._id}/task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...task,
          user: user._id,
        }),
      })).json();
      if (response.error) {
        throw new Error(response.errorMessage)
      } else if (response.data) {
        console.log('Response: ', response.data)
        setUser(response.data);
      } else {
        throw new Error('No response from the server')
      }
    } catch (error) {
      console.error('Error: ', error.message);
    }
  } 
  return (
    <BaseTaskForm open={open} setOpen={setOpen} addNewTask={addNewTask} taskFormTitle={"Create New Task"}  />
  )
}