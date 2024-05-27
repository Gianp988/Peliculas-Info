import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import X from '../assets/x.png';
import instagramIcon from '../assets/IG.jpeg'; 
import githubIcon from '../assets/Github.png'; // 

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/usuario">Usuario</Link></li>
          <li><Link to="/favoritas">Peliculas Favoritas</Link></li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="Twitter" className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github" className={styles.socialIcon} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
