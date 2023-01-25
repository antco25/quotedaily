import React from 'react';
import styles from '../styles.module.scss';
import { ReactComponent as CrossIcon } from '../Icons/cross.svg';
import { useStateContext } from '../../context/ContextWrap';
import Modal from './Modal';

const bookmarks = [
  '+ New Folder',
  'Favorites',
]

interface BookmarkModalProps {
  edit?: boolean
}

function BookmarkModal({ edit }: BookmarkModalProps) {

  const { setBookmarkModalVisible } = useStateContext();

  const handleSelection = () => {
    setBookmarkModalVisible(false)
  }

  return (
    <Modal>
      <div className={`absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl px-4 py-8 w-80 shadow-lg`}
        onClick={(e) => e.stopPropagation()}>
        {
          edit && <>
            <div className='border-b border-black/30 flex items-center pb-1'>
              <h1 className='xs:text-lg text-base font-medium mr-auto'>Edit Bookmark</h1>
              <button className='xs:w-6 w-5' onClick={() => setBookmarkModalVisible(false)}>
                <CrossIcon className={styles.crossIconBlack} />
              </button>
            </div>
            <div className='py-1.5 mb-3 font-normal xs:text-base text-sm cursor-pointer text-black/60 hover:text-black'>Remove from bookmark</div>
          </>
        }
        <div className='border-b border-black/30 flex items-center pb-1'>
          <h1 className='xs:text-lg text-base font-medium mr-auto'>Add to Bookmarks</h1>
          {
            !edit && <button className='xs:w-6 w-5' onClick={() => setBookmarkModalVisible(false)}>
              <CrossIcon className={styles.crossIconBlack} />
            </button>
          }
        </div>
        <ul className='font-normal xs:text-base text-sm cursor-pointer'>
          {
            bookmarks.map((b, i, row) => {
              return (
                <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}
                  onClick={() => handleSelection()}>
                  <div className='text-black/60 hover:text-black py-1.5 flex group'>
                    {b}
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Modal>
  );
}

export default BookmarkModal;
