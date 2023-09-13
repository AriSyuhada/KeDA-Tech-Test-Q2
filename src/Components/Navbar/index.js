import React from "react";
import {
  Link
} from 'react-router-dom';
import './index.scss';

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-button">
          <Link to="/" className="home">
            <img className="logo" src='/logo.png' alt="logo" />
            Start-App
          </Link>
        </li>
        <li className="navbar-button">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-button">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navbar-button">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="navbar-button">
          <Link to="/login" className="login-button">Login</Link>
        </li>
      </ul>
    </nav>
  );
}