import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import MenuModal, { MenuModalProps } from './MenuModal';

const filters = [
  'All',
  'Wisdom',
  'Courage',
]

function MenuFilterModal({ visible }: MenuModalProps) {
  const [filter, setFilter] = useState([false, false, false]);

  const onFilterClick = (index: number) => {
    setFilter((old) => {
      return old.map((v, i) => (i === index ? !v : v))
    })
  }

  return (
    <MenuModal visible={visible} className='max-[450px]:-left-4 max-[450px]:translate-x-0'>
      <>
        {
          filters.map((f, i, row) => {
            return (
              <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}
                onClick={() => onFilterClick(i)}>
                <div className='xs:py-1 py-1.5 flex opacity-60 hover:opacity-100'>
                  <Checkbox className='mr-4' active={filter[i]} />{f}
                </div>
              </li>
            )
          })
        }
      </>
    </MenuModal>
  );
}

export default MenuFilterModal;
