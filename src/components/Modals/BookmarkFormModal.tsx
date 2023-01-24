import React, { useState } from 'react';
import styles from '../styles.module.scss';
import { ReactComponent as CrossIcon } from '../Icons/cross.svg';

interface BookmarkFormModalProps {
  edit? : boolean
}

function BookmarkFormModal({edit} : BookmarkFormModalProps) {

  const [deleteWarning, setDeleteWarning] = useState(false);

  const handleDelete = () => {
    setDeleteWarning(true);
  }

  return (
    <div className={`absolute bg-white top-40 left-1/2 -translate-x-1/2 
    z-20 rounded-xl px-4 py-8 w-80 shadow-lg`}>
      <div className='border-b border-black/30 mb-4 flex items-center'>
        <h1 className='text-lg font-medium mr-auto'>{edit ? 'Edit Folder' : 'Create New Folder'}</h1>
        <button className='w-6'><CrossIcon className={styles.crossIconBlack} /></button>
      </div>
      <label htmlFor="fname" className='block text-[0.875rem] mb-[1px] opacity-70'>Name</label>
      <input type="text" name="fname" placeholder='Favorites'
        className='block mb-4 w-full text-base rounded-lg bg-neutral-100 py-2 px-3 outline-none' />
      <button className={`${styles.buttonForm} ${styles.buttonCreate}`}>Create</button>
      {edit && <button className={`${styles.buttonForm} ${styles.buttonDelete} mt-2`} onClick={handleDelete}>Delete</button>}
      {deleteWarning && <label className='block text-[0.875rem] text-red-600'>This process is irreversable. Continue?</label>}
    </div>
  );
}

export default BookmarkFormModal;
