import { useState } from 'react';	

import { UserContext } from '../contexts/UserContext';	

export default function UserProvider({ children }) {	
  const [user, setUser] = useState(undefined);	
  const [tasks, setTasks] = useState([]);	
  return (	
    <UserContext.Provider value={{	
      user,	
      tasks,	
      setTasks,	
      setUser,	
    }}>	
      {children}	
    </UserContext.Provider>	
  );	
}