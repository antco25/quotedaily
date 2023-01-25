import React from 'react';
import { useStateContext } from '../../context/ContextWrap';
import { ReactComponent as EditIcon } from '../Icons/edit.svg';
import MenuModal, { MenuModalProps } from './MenuModal';

const bookmarks = [
  'Favorites',
  'Wisdom'
]

function MenuBookmarkModal({ visible }: MenuModalProps) {

  const { setBookmarkMenuModalVisible, setBookmarkFormModalVisible, setBookmarkFormModalEdit } = useStateContext();

  const handleNewClick = () => {
    setBookmarkFormModalEdit(false);
    setBookmarkMenuModalVisible(false)
    setBookmarkFormModalVisible(true);
  }

  const handleEditClick = () => {
    setBookmarkFormModalEdit(true);
    setBookmarkMenuModalVisible(false)
    setBookmarkFormModalVisible(true);
  }

  return (
    <MenuModal visible={visible}>
      <>
        <li className={`border-b border-black/30`} onClick={handleNewClick}>
          <div className='text-black/60 hover:text-black xs:py-1 py-1.5 flex group'>+ New Folder</div>
        </li>
        {
          bookmarks.map((b, i, row) => {
            return (
              <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}
                onClick={() => setBookmarkMenuModalVisible(false)}>
                <div className='text-black/60 hover:text-black xs:py-1 py-1.5 flex group'>{b}
                  <EditIcon className='inline-block xs:w-4 w-3.5 ml-auto invisible group-hover:visible opacity-50 hover:opacity-100'
                    onClick={handleEditClick} />
                </div>
              </li>
            )
          })
        }
      </>
    </MenuModal>
  );
}

export default MenuBookmarkModal;
