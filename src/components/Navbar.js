import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 className="m-0 text-primary">GoBI</h2>
    </Link>
    <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="/" className="nav-item nav-link active">Home</Link>
        <Link to="/eseva" className="nav-item nav-link">E-Sevai</Link>
        <Link to="/computer" className="nav-item nav-link">Computer</Link>
        <Link to="/food" className="nav-item nav-link">Food</Link>
        <Link to="/admin-login" className="nav-item nav-link">Admin Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
