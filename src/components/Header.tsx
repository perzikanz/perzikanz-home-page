import React from 'react';
import Link from 'next/link';

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.link_list}>
        <li className={styles.link_list_item}>
          <Link href='/' as='/index.html'>
            <a className={styles.link_anchor}>top</a>
          </Link>
        </li>
        <li className={styles.link_list_item}>
          <Link href='/blog' as='/blog.html'>
            <a className={styles.link_anchor}>blog</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
