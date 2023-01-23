import React from 'react';
import { ReactComponent as BookmarkIcon } from '../Icons/bookmark.svg';
import styles from './Button.module.scss';


interface BookmarkButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  large?: boolean
}

function BookmarkButton({ active, large, className }: BookmarkButtonProps) {
  return (
    <button className={`${className ? className + ' ' : ''}${active ? styles.bookmarkActive + ' ' : ''}${styles.bookmarkFill} 
    p-2 bg-black bg-opacity-80 rounded-full`}>
      <BookmarkIcon className={`${large ? 'xsm:w-5 w-4' : 'w-4'} m-[1px]`} />
    </button>
  );
}
export default BookmarkButton;
