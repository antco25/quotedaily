import React from 'react';
import Card from '../Card/Card';

import { data } from '../../context/sampleData';
import FilterTag, { FilterTagType } from '../FilterTag/FilterTag';
import { useStateContext } from '../../context/ContextWrap';

function Grid() {
  const { filters, setFilters } = useStateContext();

  const activeFilters = filters.filter(f => f.active);
  const handleFilterTagClick = (filter: FilterTagType) => {
    setFilters((old) => {
      return old.map((o) => (o.filter === filter ? { filter: o.filter, active: false } : o))
    })
  }

  return (
    <div className='p-5'>
      <h1 className='font-bold leading-none md:text-5xl xsm:text-[2.5rem] xs:text-4xl text-3xl mt-8 mb-4 opacity-80'>Quotes of the Day</h1>
      <div className='mb-8 flex gap-1'>
        {
          activeFilters.length === 0 ? <FilterTag tag="all" /> :
            activeFilters.map((f, i) => <FilterTag tag={f.filter} key={i} onClick={() => handleFilterTagClick(f.filter)} />)
        }
      </div>
      <div className='grid lg:gap-5 gap-3 min-[840px]:grid-cols-3 xsm:grid-cols-2 grid-cols-1'>
        {
          data.results.map((q, index) => {
            if (index === 0)
              return <Card key={index} data={q} topCard className='xsm:col-span-2' />
            else
              return <Card key={index} data={q} />
          })
        }
      </div>
    </div>

  );
}

export default Grid;
