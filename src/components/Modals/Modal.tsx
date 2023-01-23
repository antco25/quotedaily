import React from 'react';

export interface ModalProps {
  visible?: boolean,
}

interface BaseModalProps extends ModalProps {
  title: string,
  children?: JSX.Element
}

const Modal: React.FC<BaseModalProps> = ({ visible, title, children }) => {
  return (
    <div className={`${visible ? 'visible opacity-100' : 'invisible opacity-0'} absolute bg-white top-full left-1/2 -translate-x-1/2 
    z-20 rounded-lg p-4 w-48 shadow-lg`}>
      <h1 className='text-lg border-b border-black/30 xsm:hidden'>{title}</h1>
      <ul className='font-normal text-base cursor-pointer'>
        {children}
      </ul>
    </div>
  );
}

export default Modal;
