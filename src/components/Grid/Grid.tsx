import React from 'react';
import Card from '../Card/Card';

import { data } from '../../context/sampleData';

function Grid() {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {
        data.results.map((q, index) => {
          if (index === 0)
            return <Card key={index} data={q} className='col-span-2'/>
          else
            return <Card key={index} data={q} />
        })
      }
    </div>
  );
}

export default Grid;
