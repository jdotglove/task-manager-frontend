import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import BaseTaskForm from './BaseTaskForm';
import { REACT_APP_TASK_MANAGER_API_URL } from '../../../constants';
import { UserContext } from '../../../contexts/UserContext';

export default function AddTaskForm({
  open,
  setOpen
}) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const addNewTask = async (username, password) => {
    console.log('User: ', user)
    try {
      const response = await (await fetch(`${REACT_APP_TASK_MANAGER_API_URL}/user/${user._id}/task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })).json();
      if (response.error) {
        throw new Error(response.errorMessage)
      } else if (response.data) {
        //navigate('/task-manager');
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