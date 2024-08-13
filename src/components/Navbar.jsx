// src/components/Navbar.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faBriefcase, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavbarStyles.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#hero">
            <FontAwesomeIcon icon={faHome} />
            <span className={styles.navText}>Home</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects">
            <FontAwesomeIcon icon={faBriefcase} />
            <span className={styles.navText}>Projects</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#skills">
            <FontAwesomeIcon icon={faLightbulb} />
            <span className={styles.navText}>Skills</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className={styles.navText}>Contact</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about">
            <FontAwesomeIcon icon={faUser} />
            <span className={styles.navText}>About</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
