import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './design/Header.module.css';
import userIcon from './design/user.png';

const Header = () => (
  <div className={styles.head}>
    <div className={styles.leftSide}>
      <h1 className={styles.title}>Bookstore CMS</h1>
      <div>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <NavLink to="/" exact activeClassName={styles.active}>BOOKS</NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to="/categories" exact activeClassName={styles.active}>CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
    </div>
    <img src={userIcon} alt="user" />
  </div>
);

export default Header;
