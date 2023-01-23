import React from 'react';
import logo from '../Icons/logo.svg';
import styles from '../styles.module.scss';

function Header() {
  return (
    <header className='bg-white min-[1140px]:px-0 px-5 min-[450px]:py-16 pt-14 pb-6 min-[450px]:block flex justify-center'>
      <div className='flex items-center min-[450px]:flex-row flex-col min-[450px]:w-auto xs:w-[320px] w-[300px] min-[450px]:gap-0 gap-4'>
        <img className='xsm:h-8 h-7 mr-auto' src={logo} alt='logo' />
        <ul className='font-medium xs:text-lg text-base flex xsm:gap-4 gap-2 items-center min-[450px]:w-auto w-full justify-between'>
          <li className='inline-block p-1'><button className={`${styles.buttonLink}`}>Filters</button></li>
          <li className='inline-block p-1'><button className={`${styles.buttonLink}`}>Bookmarks</button></li>
          <li className='inline-block p-1'>
            <button className={`bg-green-600 hover:bg-green-500 text-white rounded-lg py-1 px-3`}>
              Sign-In
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
