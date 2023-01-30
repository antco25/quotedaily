import React from 'react';
import { useStateContext } from '../../context/ContextWrap';
import Checkbox from '../Checkbox/Checkbox';
import MenuModal, { MenuModalProps } from './MenuModal';

function MenuFilterModal({ visible }: MenuModalProps) {

  const { filters, setFilters } = useStateContext();
  const activeFilters = filters.filter(f => f.active);

  const onFilterClick = (index: number) => {
    setFilters((old) => {
      return old.map((v, i) => (i === index ? { filter: v.filter, active: !v.active } : v))
    })
  }

  const removeFilters = () => {
    setFilters((old) => {
      return old.map(v => { return { filter: v.filter, active: false } })
    })
  }

  return (
    <MenuModal visible={visible} className='max-[450px]:-left-4 max-[450px]:translate-x-0'>
      <>
        <li className='border-b border-black/30'
          onClick={removeFilters}>
          <div className='xs:py-1 py-1.5 flex opacity-60 hover:opacity-100 capitalize'>
            <Checkbox className='mr-4' active={activeFilters.length === 0} />None
          </div>
        </li>
        {
          filters.map((f, i, row) => {
            return (
              <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}
                onClick={() => onFilterClick(i)}>
                <div className='xs:py-1 py-1.5 flex opacity-60 hover:opacity-100 capitalize'>
                  <Checkbox className='mr-4' active={f.active} />{f.filter}
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
