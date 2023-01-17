import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App bg-slate-100">
      <Header />
      <main className='flex-1'>
        <div className='min-h-[400px] w-full'>
          <p className=''>Content</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
