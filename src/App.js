import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import EsevaPage from './pages/EsevaPage';
import ComputerPage from './pages/ComputerPage';
import FoodPage from './pages/FoodPage';
import AdminLoginPage from './components/AdminLogin';

const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/eseva">E-Sevai</Link>
        <Link to="/computer">Computer</Link>
        <Link to="/food">Food</Link>
        <Link to="/admin-login">Admin Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div className="p-4 text-lg">Welcome to the Services Website</div>} />
        <Route path="/eseva" element={<EsevaPage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={isLoggedIn ? <AdminPanel /> : <Navigate to="/admin-login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
