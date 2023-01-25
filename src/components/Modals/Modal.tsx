import React from 'react';
import { useStateContext } from '../../context/ContextWrap';

interface ModalProps {
    children?: JSX.Element,
}

const Modal: React.FC<ModalProps> = ({ children }) => {

    const { closeModal } = useStateContext();

    return (
        <div className='fixed overflow-auto min-w-[375px] w-full h-full top-0 left-0 bg-black/40 z-30'
            onClick={() => closeModal()}>
            {children}
        </div>
    );
}

export default Modal;
