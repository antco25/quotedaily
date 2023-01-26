import React from 'react';
import { useStateContext } from '../../context/ContextWrap';
import Footer from '../Footer/Footer';
import Grid from '../Grid/Grid';
import Header from '../Header/Header';
import BookmarkFormModal from '../Modals/BookmarkFormModal';
import BookmarkModal from '../Modals/BookmarkModal';
import './App.scss';

function App() {
  const { bookmarkModalVisible, bookmarkModalEdit, bookmarkFormModalVisible } = useStateContext();

  return (
    <div className="App bg-neutral-100">
      <Header />
      <main className='flex-1'>
        <Grid />
      </main>
      <Footer />
      {bookmarkModalVisible && <BookmarkModal edit={bookmarkModalEdit} />}
      {bookmarkFormModalVisible && <BookmarkFormModal/>}
    </div>
  );
}

export default App;
