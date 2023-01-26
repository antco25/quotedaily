import React from 'react';
import styles from './FilterTag.module.scss';
import { ReactComponent as CrossIcon } from '../Icons/cross.svg';

interface FilterTagProps {
  tag: FilterTagType,
  onClick?: () => void,
};

export type FilterTagType = 'all' | 'wisdom' | 'courage' | 'inspiration';

function FilterTag({ tag, onClick }: FilterTagProps) {
  return (
    <span className={`relative group cursor-pointer text-white text-center inline-block xsm:text-base text-sm min-w-[56px] py-1 px-4 rounded-lg capitalize ${styles[tag]}`}
      onClick={onClick}>
      {tag !== 'all' && <CrossIcon className='absolute w-4 h-4 rounded-full bg-black bg-opacity-90 -top-1 -right-1 opacity-0 group-hover:opacity-100' />}
      {tag}
    </span>
  );
}
export default FilterTag;
