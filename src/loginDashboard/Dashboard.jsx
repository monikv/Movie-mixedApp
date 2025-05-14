// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import privateApi from './api/apiPrivate';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    privateApi.get('/users/2')
      .then(res => setUser(res.data.data))
      .catch(() => {
        alert('Auth failed');
        navigate('/');
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <p>Welcome, {user.first_name} {user.last_name}</p>
          <img src={user.avatar} alt="User avatar" />
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
