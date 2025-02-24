import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import { useState } from 'react';
import TaskList from './components/tasks/tasklist';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')!==null);

  const updateAuthState = () => {
    setIsLoggedIn(localStorage.getItem('token')!==null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login updateAuthState={updateAuthState} /> : <Navigate to="/tasks" />} />
          <Route path="/register" element={!isLoggedIn ? <Register updateAuthState={updateAuthState} /> : <Navigate to="/tasks" />} />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/tasks" : "/login"} />} />
          <Route path="/tasks" element={isLoggedIn ? <TaskList updateAuthState={updateAuthState} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
