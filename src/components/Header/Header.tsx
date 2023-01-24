import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextWrap';
import logo from '../Icons/logo.svg';
import MenuBookmarkModal from '../Modals/MenuBookmarkModal';
import MenuFilterModal from '../Modals/MenuFilterModal';
import ModalHeaderBG from '../Modals/ModalHeaderBG';
import styles from '../styles.module.scss';

//TODO: Remove modals when click outside (disable onmouseenter/leave to test)
//Go to modalheaderBG and pass it an onClick function. 
function Header() {
  const { modalBGVisible, setModalBGVisible } = useStateContext();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [bookmarkModalVisible, setBookmarkModalVisible] = useState(false);

  const setModalVisible = (visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (visible) {
      setVisible(true);
      setModalBGVisible(true);
    } else {
      setVisible(false);
      setModalBGVisible(false);
    }
  }

  return (
    <header className={`bg-white min-[1140px]:px-0 px-5 flex justify-center ${styles.headerHeight}`}>
      <div className={`flex items-center justify-center min-[450px]:flex-row flex-col min-[450px]:w-full xs:w-[320px] w-[300px] 
      min-[450px]:gap-0 gap-4 min-[450px]:pt-0 pt-6`}>
        <img className='xsm:h-8 h-7 mr-auto' src={logo} alt='logo' />
        <ul className='font-medium xs:text-lg text-base flex items-center min-[450px]:w-auto w-full justify-between'>
          <li className='inline-block relative px-2'
            onMouseEnter={() => setModalVisible(true, setFilterModalVisible)}
            onMouseLeave={() => setModalVisible(false, setFilterModalVisible)}>
            <button className={`${styles.buttonLink} ${filterModalVisible ? '!opacity-100' : ''} p-1`}
              onClick={() => setModalVisible(!filterModalVisible, setFilterModalVisible)}>Filters</button>
            <MenuFilterModal visible={filterModalVisible} />
          </li>
          <li className='inline-block relative px-2'
            onMouseEnter={() => setModalVisible(true, setBookmarkModalVisible)}
            onMouseLeave={() => setModalVisible(false, setBookmarkModalVisible)}>
            <button className={`${styles.buttonLink} ${bookmarkModalVisible ? '!opacity-100' : ''} p-1`}
              onClick={() => setModalVisible(!bookmarkModalVisible, setFilterModalVisible)}>Bookmarks</button>
            <MenuBookmarkModal visible={bookmarkModalVisible} />
          </li>
          <li className='inline-block pl-2'>
            <button className={`bg-green-600 hover:bg-green-500 text-white rounded-lg py-1 px-3`}>
              Sign-In
            </button>
          </li>
        </ul>
      </div>
      {modalBGVisible && <ModalHeaderBG />}
    </header>
  );
}

export default Header;
