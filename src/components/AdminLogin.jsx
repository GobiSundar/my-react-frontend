import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin123') {
      localStorage.setItem('admin_logged_in', 'true');
      navigate('/admin');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-2 py-1 mb-2 block"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default AdminLoginPage;
