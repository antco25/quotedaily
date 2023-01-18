import React from 'react';
import logo from '../Icons/logo.svg';
import styles from '../styles.module.scss';

//TODO: Button modals
function Footer() {
  return (
    <footer className='bg-white flex flex-col items-center text-center gap-5 p-10'>
        <img className='h-6 mt-5' src={logo} />
        <ul className='font-medium text-base'>
          <li><button className={`p-1 ${styles.buttonLink}`}>Attributions</button></li>
          <li><button className={`p-1 ${styles.buttonLink}`}>Terms & Policies</button></li>
        </ul>
        <div className='text-sm italic opacity-60'>
          <p>All rights reserved</p>
          <p>Copyright 2023</p>
        </div>
    </footer>
  );
}

export default Footer;
