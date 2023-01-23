import React from 'react';
import Footer from '../Footer/Footer';
import Grid from '../Grid/Grid';
import Header from '../Header/Header';
import BookmarkFormModal from '../Modals/BookmarkFormModal';
import './App.scss';

function App() {
  return (
    <div className="App bg-neutral-100">
      <Header />
      <main className='flex-1'>
        <Grid />
      </main>
      <Footer />
      <BookmarkFormModal />
    </div>
  );
}

export default App;
