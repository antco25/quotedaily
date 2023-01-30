import React, { useState } from 'react';
import styles from '../styles.module.scss';
import { ReactComponent as CrossIcon } from '../Icons/cross.svg';
import { useStateContext } from '../../context/ContextWrap';
import { ReactComponent as CheckboxIcon } from '../Icons/checkbox.svg';
import Modal from './Modal';
import { Bookmark } from '../../context/dataTypes';

function BookmarkModal() {

  const { bookmarks, currentQuote, setCurrentQuote, addSavedQuote, updateSavedQuote, deleteSavedQuote, setBookmarkModalVisible } = useStateContext();
  const [warning, setWarning] = useState(false);

  if (currentQuote === undefined) {
    setBookmarkModalVisible(false)
    return null;
  }

  const handleDeleteSavedQuote = (savedQuoteId: string) => {
    if (!warning) {
      setWarning(true);
      return;
    }

    deleteSavedQuote(savedQuoteId)
    setBookmarkModalVisible(false)
  }

  const handleSelection = (bookmark: Bookmark, isCurrentBookmarked: boolean) => {
    if (currentQuote.savedQuote === undefined) {
      addSavedQuote(bookmark.id, currentQuote.quote._id)
      setBookmarkModalVisible(false);
    } else if (isCurrentBookmarked) {
      handleDeleteSavedQuote(currentQuote.savedQuote.id);
    } else {
      setWarning(false);
      const savedQuote = updateSavedQuote({ ...currentQuote.savedQuote, bookmarkId: bookmark.id });
      setCurrentQuote({ quote: currentQuote.quote, savedQuote: savedQuote });
    }
  }

  return (
    <Modal>
      <div className={`absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl px-4 py-8 w-80 shadow-lg`}
        onClick={(e) => e.stopPropagation()}>
        <div className='border-b border-black/30 flex items-center pb-1'>
          <h1 className='xs:text-lg text-base font-medium mr-auto'>{currentQuote?.savedQuote ? 'Edit Bookmarks' : 'Add to Bookmarks'}</h1>
          <button className='xs:w-6 w-5' onClick={() => setBookmarkModalVisible(false)}>
            <CrossIcon className={styles.crossIconBlack} />
          </button>
        </div>
        <ul className='font-normal xs:text-base text-sm cursor-pointer'>
          {
            bookmarks.map((b, i, row) => {
              const isCurrentBookmarked = (b.id === currentQuote?.savedQuote?.bookmarkId)
              return (
                <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}
                  onClick={() => handleSelection(b, isCurrentBookmarked)}>
                  <div className='opacity-60 hover:opacity-100 py-1.5 flex items-center'>
                    {b.name}
                    {
                      isCurrentBookmarked &&
                      <CheckboxIcon className={`${styles.checkmark} ml-auto mr-1 xs:w-4 w-3`} />
                    }
                  </div>
                </li>
              )
            })
          }
        </ul>
        {warning && <label className='block xs:text-[0.875rem] text-sm text-red-600'>Are you sure you want to remove this bookmark?</label>}
      </div>
    </Modal>
  );
}

export default BookmarkModal;
