import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextWrap';
import logo from '../Icons/logo.svg';
import MenuBookmarkModal from '../Modals/MenuBookmarkModal';
import MenuFilterModal from '../Modals/MenuFilterModal';
import ModalHeaderBG from '../Modals/ModalHeaderBG';
import styles from '../styles.module.scss';

function Header() {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  //const [bookmarkModalVisible, setBookmarkModalVisible] = useState(false);
  const { bookmarkMenuModalVisible, setBookmarkMenuModalVisible } = useStateContext();

  const closeModals = () => {
    setFilterModalVisible(false);
    setBookmarkMenuModalVisible(false);
  }
  const setModalVisible = (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (setVisible === setFilterModalVisible) {
      setBookmarkMenuModalVisible(false);
    } else {
      setFilterModalVisible(false);
    }

    setVisible(ov => !ov);
  }

  return (
    <header className={`bg-white min-[1140px]:px-0 px-5 flex justify-center ${styles.headerHeight}`} onClick={() => closeModals()}>
      <div className={`flex items-center justify-center min-[450px]:flex-row flex-col min-[450px]:w-full xs:w-[320px] w-[300px] 
      min-[450px]:gap-0 gap-4 min-[450px]:pt-0 pt-6`}>
        <img className='xsm:h-8 h-7 mr-auto' src={logo} alt='logo' />
        <ul className='font-medium xs:text-lg text-base flex items-center min-[450px]:w-auto w-full justify-between'>
          <li className='inline-block relative px-2' onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setFilterModalVisible(true)}
            onMouseLeave={() => setFilterModalVisible(false)}>
            <button className={`${styles.buttonLink} ${filterModalVisible ? '!opacity-100' : ''} p-1`}
              onClick={() => setModalVisible(setFilterModalVisible)}>Filters</button>
            <MenuFilterModal visible={filterModalVisible} />
          </li>
          <li className='inline-block relative px-2' onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setBookmarkMenuModalVisible(true)}
            onMouseLeave={() => setBookmarkMenuModalVisible(false)}>
            <button className={`${styles.buttonLink} ${bookmarkMenuModalVisible ? '!opacity-100' : ''} p-1`}
              onClick={() => setModalVisible(setBookmarkMenuModalVisible)}>Bookmarks</button>
            <MenuBookmarkModal visible={bookmarkMenuModalVisible} />
          </li>
          <li className='inline-block pl-2'>
            <button className={`bg-green-600 hover:bg-green-500 text-white rounded-lg py-1 px-3`}>
              Sign-In
            </button>
          </li>
        </ul>
      </div>
      {(filterModalVisible || bookmarkMenuModalVisible) && <ModalHeaderBG />}
    </header>
  );
}

export default Header;

