import React from 'react';
import styles from '../styles.module.scss';


function ModalHeaderBG() {
  return (
    <div className={`absolute bg-black bg-opacity-40 w-full left-0 ${styles.modalBgHeight} z-10`}>
    </div>
  );
}

export default ModalHeaderBG;
