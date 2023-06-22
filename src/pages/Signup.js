import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { REACT_APP_TASK_MANAGER_API_URL } from '../constants';
import SignupForm from '../components/forms/auth/SignupForm';
import '../App.css';
import { TaskManagerContext } from '../contexts/TaskManagerContext';


export default function Signup() {
  const { user, setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();

  const submitSignup = async (username, password, email) => {
    try {
      const response = await (await fetch(`${REACT_APP_TASK_MANAGER_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      })).json();
      console.log('Response: ', response.data);
      if (response.error) {
        throw new Error(response.errorMessage)
      } else if (response.data) {
        setUser(response.data);
        navigate('/task-manager');
      } else {
        throw new Error('No response from server.')
      }
    } catch (error) {
      console.error('Error: ', error.message);
    }
  }

  return (
    <main>
      <div className="conatiner">
        <div className="row">
          {user ? (
            <div>User Signed Up</div>
          ) : (
            <div className="col text-center">
              <SignupForm signupUser={submitSignup} />
            </div>
          )}
        </div>
      </div>
    </main>
  )

}