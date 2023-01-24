import React from 'react';
import { ReactComponent as EditIcon } from '../Icons/edit.svg';
import Modal, { ModalProps } from './Modal';

const bookmarks = [
  '+ New Folder',
  'Favorites',
  'Wisdom'
]

function MenuBookmarkModal({ visible }: ModalProps) {
  return (
    <Modal title='Bookmarks' visible={visible}>
      <>
        {
          bookmarks.map((b, i, row) => {
            return (
              <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}>
                <div className='text-black/60 hover:text-black py-1 flex group'>
                  {b}
                  {(i !== 0) && <EditIcon className='inline-block w-4 ml-auto invisible group-hover:visible opacity-50 hover:opacity-100' />}
                </div>
              </li>
            )
          })
        }
      </>
    </Modal>
  );
}

export default MenuBookmarkModal;
