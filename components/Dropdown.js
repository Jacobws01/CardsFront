import React, { useState } from 'react';
import { MenuItems } from './Menuitems';
import Link from 'next/link';

import styles from '../styles/Dropdown.module.css'

function Dropdown() {
  return (
      <ul
        className={styles.dropdownmenu}
      >
        {MenuItems.map((item, index) => {
          return (
             <Link
                href={item.path}
              >
            <li className={styles.dropdownlink} key={index}>
                {item.title}
                </li>
              </Link>
          );
        })}
      </ul>
  );
}

export default Dropdown;