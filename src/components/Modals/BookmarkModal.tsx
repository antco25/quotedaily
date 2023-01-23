import React from 'react';
import styles from '../styles.module.scss';
import Modal, { ModalProps } from './Modal';

const bookmarks = [
  '+ New Folder',
  'Favorites'
]

function BookmarkModal({ visible }: ModalProps) {
  return (
    <Modal title='Bookmarks' visible={visible}>
      <>
        {
          bookmarks.map((b, i, row) => {
            return (
              <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}
              text-black/60 hover:text-black py-1`}>
                {b}
              </li>
            )
          })
        }
      </>
    </Modal>
  );
}

export default BookmarkModal;
