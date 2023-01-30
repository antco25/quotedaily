import React from 'react';
import { useStateContext } from '../../context/ContextWrap';
import { Bookmark } from '../../context/dataTypes';
import { ReactComponent as EditIcon } from '../Icons/edit.svg';
import MenuModal, { MenuModalProps } from './MenuModal';

function MenuBookmarkModal({ visible }: MenuModalProps) {

  const { bookmarks, updateCurrentBookmark, setBookmarkMenuModalVisible,
    setBookmarkFormModalVisible, setBookmarkFormModalEdit } = useStateContext();

  const handleNewClick = () => {
    setBookmarkFormModalEdit({ edit: false, index: -1 });
    setBookmarkMenuModalVisible(false)
    setBookmarkFormModalVisible(true);
  }

  const handleEditClick = (bookmarkIndex: number, e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setBookmarkFormModalEdit({ edit: true, index: bookmarkIndex });
    setBookmarkMenuModalVisible(false)
    setBookmarkFormModalVisible(true);
  }

  const handleClick = (bookmark: Bookmark) => {
    updateCurrentBookmark(bookmark);
    setBookmarkMenuModalVisible(false);
  }

  return (
    <MenuModal visible={visible}>
      <>
        <li className={`border-b border-black/30`} onClick={handleNewClick}>
          <div className='text-black/60 hover:text-black xs:py-1 py-1.5 flex'>+ New Folder</div>
        </li>
        {
          bookmarks.map((b, i, row) => {
            return (
              <li key={i} className={`${i + 1 === row.length ? '' : 'border-b border-black/30 '}`}
                onClick={() => handleClick(b)}>
                <div className='text-black/60 hover:text-black xs:py-1 py-1.5 flex group'>{b.name}
                  <EditIcon className='inline-block xs:w-4 w-3.5 ml-auto invisible group-hover:visible opacity-50 hover:opacity-100'
                    onClick={(e) => handleEditClick(i, e)} />
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
