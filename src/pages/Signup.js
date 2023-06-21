import { useContext, useState } from 'react';	
import { useNavigate } from 'react-router-dom';	

import { REACT_APP_TASK_MANAGER_API_URL } from '../constants';	
import SignupForm from '../components/forms/auth/SignupForm';	
import '../App.css';	
import { UserContext } from '../contexts/UserContext';	


export default function Signup() {	
  const { user, setUser } = useContext(UserContext);	
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
      console.log('Response: ', response);	
      if (response) {	
        setUser(response);	
        navigate('/task-manager');	
      }	
    } catch(error) {	
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