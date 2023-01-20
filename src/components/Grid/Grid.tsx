import React from 'react';
import Card from '../Card/Card';

import { data } from '../../context/sampleData';

//TODO: Filter
function Grid() {
  return (
    <div className='p-5'>
      <h1 className='font-medium text-5xl mt-10 mb-4'>Quotes of the Day</h1>
      <div className='mb-8'>
        <span className='text-white text-center inline-block text-base min-w-[56px] p-2 rounded-lg bg-blue-600'>All</span>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {
          data.results.map((q, index) => {
            if (index === 0)
              return <Card key={index} data={q} topCard className='col-span-2' />
            else
              return <Card key={index} data={q} />
          })
        }
      </div>
    </div>

  );
}

export default Grid;
