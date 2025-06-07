import React, { useState } from "react";

import styles from './Navbar.module.css';
// Importing assets for the navbar
import logo from '@assets/nav/logo.png'; 
import closeIcon from '@assets/nav/closeIcon.png';
import menuIcon from '@assets/nav/menuIcon.png';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="SkinByMCM Logo" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  );
};
