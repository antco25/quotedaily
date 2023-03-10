import React, { useState } from 'react';
import styles from '../styles.module.scss';
import { ReactComponent as CrossIcon } from '../Icons/cross.svg';
import Modal from './Modal';
import { useStateContext } from '../../context/ContextWrap';
import { isEmpty } from '../../util/utils';

function BookmarkFormModal() {

  const { bookmarks, bookmarkFormModalEdit, setBookmarkFormModalVisible, addBookmark, updateBookmark, deleteBookmark } = useStateContext();
  const [deleteWarning, setDeleteWarning] = useState(false);
  const [error, setError] = useState(false);

  const { edit, index } = bookmarkFormModalEdit;
  const editName = edit ? bookmarks[index].name : '';
  const [name, setName] = useState(editName);

  const handleDelete = () => {
    if (!deleteWarning) {
      setDeleteWarning(true);
      return;
    }
    deleteBookmark(index);
    setBookmarkFormModalVisible(false);
  }

  const handleSubmit = () => {
    if (error)
      return;

    if (isEmpty(name)) {
      setError(true);
      return
    }

    if (edit)
      updateBookmark(name, index);
    else
      addBookmark(name);

    setBookmarkFormModalVisible(false);
  }

  const handleInputChange = (s: string) => {
    if (error)
      setError(false);
    setName(s)
  }

  return (
    <Modal>
      <div className={`absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl px-4 py-8 w-80 shadow-lg`}
        onClick={(e) => e.stopPropagation()}>
        <div className='border-b border-black/30 mb-4 flex items-center'>
          <h1 className='xs:text-lg text-base font-medium mr-auto'>{edit ? `Edit ${editName}` : 'Create New Folder'}</h1>
          <button className='xs:w-6 w-5' onClick={() => setBookmarkFormModalVisible(false)}>
            <CrossIcon className={styles.crossIconBlack} /></button>
        </div>
        <label htmlFor="fname" className={`block xs:text-[0.875rem] text-sm mb-[1px] ${error ? 'text-red-600 opacity-100' : 'opacity-70'}`}>
          {`Name${error ? " - Can't be empty" : ''}`}</label>
        <input type="text" name="fname" placeholder={'Favorites'} value={name} onChange={(e) => handleInputChange(e.target.value)}
          className={`block mb-4 w-full xs:text-base text-[0.875rem] xs:rounded-lg rounded-md bg-neutral-100 py-2 px-3 
          ${error ? 'outline outline-1 outline-red-600' : 'outline-none'}`} />
        <button className={`${styles.buttonForm} ${styles.buttonCreate}`} onClick={handleSubmit}>{edit ? 'Update' : 'Create'}</button>
        {
          edit && (index !== 0) && <button className={`${styles.buttonForm} ${styles.buttonDelete} mt-2`} onClick={handleDelete}>Delete</button>
        }
        {deleteWarning && <label className='block xs:text-[0.875rem] text-sm text-red-600'>This process is irreversable. Continue?</label>}
      </div>
    </Modal>
  );
}

export default BookmarkFormModal;
