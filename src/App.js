import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import EsevaPage from './pages/EsevaPage';
import ComputerPage from './pages/ComputerPage';
import FoodPage from './pages/FoodPage';
import AdminLoginPage from './components/AdminLogin';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('admin_logged_in') === 'true');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('admin_logged_in') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Topbar />
      <Navbar />
      <HeroSlider />

      <Routes>
        <Route path="/" element={<div className="p-4 text-lg">Welcome to the Services Website</div>} />
        <Route path="/eseva" element={<EsevaPage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin" element={isLoggedIn ? <AdminPanel /> : <Navigate to="/admin-login" />} />
      </Routes>
    </Router>
  );
}

export default App;
