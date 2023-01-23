import React from 'react';
import logo from '../Icons/logo.svg';
import styles from '../styles.module.scss';

//TODO: Button modals
function Footer() {
  return (
    <footer className='bg-white flex flex-col items-center text-center gap-5 p-10'>
        <img className='mt-5 xs:h-7 h-6' src={logo} alt='logo' />
        <ul className='font-medium xs:text-lg text-base'>
          <li><button className={`p-1 ${styles.buttonLink}`}>Attributions</button></li>
          <li><button className={`p-1 ${styles.buttonLink}`}>Terms & Policies</button></li>
        </ul>
        <div className='italic opacity-60 xsm:text-base text-sm'>
          <p>All rights reserved</p>
          <p>Copyright 2023</p>
        </div>
    </footer>
  );
}

export default Footer;
