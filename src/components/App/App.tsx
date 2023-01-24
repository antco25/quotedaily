import React from 'react';
import { useStateContext } from '../../context/ContextWrap';
import Footer from '../Footer/Footer';
import Grid from '../Grid/Grid';
import Header from '../Header/Header';
import BookmarkModal from '../Modals/BookmarkModal';
import './App.scss';

function App() {
  const { bookmarkModalVisible } = useStateContext();

  return (
    <div className="App bg-neutral-100">
      <Header />
      <main className='flex-1'>
        <Grid />
      </main>
      <Footer />
      {bookmarkModalVisible && <BookmarkModal />}
    </div>
  );
}

export default App;
