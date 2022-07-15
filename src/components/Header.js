import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.head}>
    <div className={styles.leftSide}>
      <h1>Bookstore CMS</h1>
      <div>
        <ul className={styles.links}>
          <li className={styles.linkItem}>Books</li>
          <li className={styles.linkItem}>Categories</li>
        </ul>
      </div>
    </div>
    <>UserIcon</>
  </div>
);

export default Header;
