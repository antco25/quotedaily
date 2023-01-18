import React from 'react';
import logo from '../Icons/logo.svg';
import styles from '../styles.module.scss';

function Header() {
  return (
    <header className='bg-white flex items-center py-16'>
      <img className='h-8 mr-auto' src={logo} />
      <ul className='font-medium text-lg'>
        <li className='inline-block p-1 mr-4'><button className={`${styles.buttonLink}`}>Filters</button></li>
        <li className='inline-block p-1 mr-4'><button className={`${styles.buttonLink}`}>Bookmarks</button></li>
        <li className='inline-block p-1'>
          <button className={`bg-green-600 hover:bg-green-500 text-white rounded-lg py-1 px-3`}>
            Sign-In
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
