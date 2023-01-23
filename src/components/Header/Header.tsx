import React, { useState } from 'react';
import logo from '../Icons/logo.svg';
import BookmarkModal from '../Modals/BookmarkModal';
import FilterModal from '../Modals/FilterModal';
import ModalBackground from '../Modals/ModalBackground';
import styles from '../styles.module.scss';

//TODO: Remove modals when click outside (disable onmouseenter/leave to test)
function Header() {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [bookmarkModalVisible, setBookmarkModalVisible] = useState(false);

  return (
    <header className={`bg-white min-[1140px]:px-0 px-5 flex justify-center ${styles.headerHeight}`}>
      <div className={`flex items-center justify-center min-[450px]:flex-row flex-col min-[450px]:w-full xs:w-[320px] w-[300px] 
      min-[450px]:gap-0 gap-4 min-[450px]:pt-0 pt-6`}>
        <img className='xsm:h-8 h-7 mr-auto' src={logo} alt='logo' />
        <ul className='font-medium xs:text-lg text-base flex items-center min-[450px]:w-auto w-full justify-between'>
          <li className='inline-block relative px-2'
            onMouseEnter={() => setFilterModalVisible(true)} onMouseLeave={() => setFilterModalVisible(false)}>
            <button className={`${styles.buttonLink} ${filterModalVisible ? '!opacity-100' : ''} p-1`}
              onClick={() => setFilterModalVisible(!filterModalVisible)}>Filters</button>
            <FilterModal visible={filterModalVisible} />
          </li>
          <li className='inline-block relative group px-2'
            onMouseEnter={() => setBookmarkModalVisible(true)} onMouseLeave={() => setBookmarkModalVisible(false)}>
            <button className={`${styles.buttonLink} ${bookmarkModalVisible ? '!opacity-100' : ''} p-1`}
              onClick={() => setBookmarkModalVisible(!bookmarkModalVisible)}>Bookmarks</button>
            <BookmarkModal visible={bookmarkModalVisible} />
          </li>
          <li className='inline-block pl-2'>
            <button className={`bg-green-600 hover:bg-green-500 text-white rounded-lg py-1 px-3`}>
              Sign-In
            </button>
          </li>
        </ul>
      </div>
      {(!filterModalVisible || bookmarkModalVisible) && <ModalBackground />}
    </header>
  );
}

export default Header;
