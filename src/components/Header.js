import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.head}>
    <div className={styles.leftSide}>
      <h1>Bookstore CMS</h1>
      <div>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <NavLink to="/" exact>Books</NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to="/categories" exact>Categories</NavLink>
          </li>
        </ul>
      </div>
    </div>
    <>UserIcon</>
  </div>
);

export default Header;
