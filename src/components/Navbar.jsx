import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
// import Button from './Button';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItem.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* <Button title="join now" /> */}
      <button className="btn">join now</button>
    </nav>
  );
};

export default Navbar;
