import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Modal, { ModalProps } from './Modal';

const filters = [
  'All',
  'Wisdom',
  'Courage',
]

function MenuFilterModal({ visible }: ModalProps) {
  const [filter, setFilter] = useState([false, false, false]);

  const onFilterClick = (index: number) => {
    setFilter((old) => {
      return old.map((v, i) => (i === index ? !v : v))
    })
  }

  return (
    <Modal title='Add Filters' visible={visible}>
      <>
        {
          filters.map((f, i, row) => {
            return (
              <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}
                onClick={() => onFilterClick(i)}>
                <div className='py-1 flex opacity-60 hover:opacity-100'>
                  <Checkbox className='mr-4' active={filter[i]} />{f}
                </div>
              </li>
            )
          })
        }
      </>
    </Modal>
  );
}

export default MenuFilterModal;
