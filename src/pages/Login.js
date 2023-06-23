import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainHeader from '../components/headers/MainHeader';
import { TaskManagerContext } from '../contexts/TaskManagerContext';
import { REACT_APP_TASK_MANAGER_API_URL } from '../constants';
import LoginForm from '../components/forms/auth/LoginForm';
import '../App.css';

export default function Login() {
  const { user, setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const submitLogin = async (username, password) => {
    try {
      const response = await (await fetch(`${REACT_APP_TASK_MANAGER_API_URL}/login`, {
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
        console.error(response);
        if (response.errorMessage === 'User Not Found.') {
          setLoginError(true);
        }
        throw new Error(response.errorMessage);
      } else if (response.data) {
        setUser(response.data);
        navigate('/task-manager');
      } else {
        throw new Error('No response from the server')
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  return (
    <main>
      <MainHeader />
      <div className="conatiner">
        <div className="row">
          {user ? (
            <div>User Logged In</div>
          ) : (
            <div className="col text-center">
              <LoginForm loginUser={submitLogin} loginError={loginError} />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}