import React from 'react';
import styles from '../styles.module.scss';

interface ModalBackgroundProps {
  full?: boolean
}

function ModalBackground({ full }: ModalBackgroundProps) {
  return (
    <div className={`absolute bg-black bg-opacity-40 w-full left-0 ${full ? 'top-0 h-full' :styles.modalBgHeight} z-10`}>
    </div>
  );
}

export default ModalBackground;
