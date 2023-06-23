import React from 'react';	
import ReactDOM from 'react-dom/client';	
import './index.css';	
import App from './App';	
import reportWebVitals from './reportWebVitals';	
import TaskManagerProvider from './providers/TaskManagerProvider';	
import MainHeader from './components/headers/MainHeader';	

const root = ReactDOM.createRoot(document.getElementById('root'));	
root.render(	
  <React.StrictMode>	
    <TaskManagerProvider>		
      <App />	
    </TaskManagerProvider>	
  </React.StrictMode>	
);	

// If you want to start measuring performance in your app, pass a function	
// to log results (for example: reportWebVitals(console.log))	
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals	
reportWebVitals();