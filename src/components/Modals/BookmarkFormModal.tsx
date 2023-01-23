import React from 'react';
import styles from '../styles.module.scss';

function BookmarkFormModal() {
  return (
    <div className={`absolute bg-white top-40 left-1/2 -translate-x-1/2 
    z-20 rounded-xl px-4 py-8 w-80 shadow-lg`}>
      <h1 className='text-lg border-b border-black/30 mb-5 font-medium'>Create New Folder</h1>
      <label htmlFor="fname" className='block text-[0.875rem] mb-[1px] opacity-70'>Name</label>
      <input type="text" id="fname" name="fname" placeholder='Favorites'
        className='block mb-5 w-full text-base rounded-lg bg-neutral-100 py-2 px-3 outline-none' />
      <button className={`${styles.buttonCreate}`}>Create</button>
    </div>
  );
}

export default BookmarkFormModal;
