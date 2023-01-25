import React from 'react';

export interface MenuModalProps {
  visible?: boolean,
}

interface BaseMenuModalProps extends MenuModalProps {
  children?: JSX.Element,
  className?: string,
}

const MenuModal: React.FC<BaseMenuModalProps> = ({ visible, className, children }) => {
  return (
    <div className={`${visible ? 'visible opacity-100' : 'invisible opacity-0'} absolute bg-white top-full left-1/2 -translate-x-1/2 
    z-20 rounded-lg p-4 w-48 shadow-lg${className ? ' ' + className : ''}`}>
      <ul className='font-normal xs:text-base text-sm cursor-pointer'>
        {children}
      </ul>
    </div>
  );
}

export default MenuModal;
