import React from 'react';
import { Quote } from '../../context/dataTypes';
import quotation from '../Icons/quotation.svg';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Quote
}

function Card({ data, className }: CardProps) {
  return (
    <div className={`${className ? className + ' ' : ''}
    relative bg-white rounded-lg shadow-lg h-[300px] text-center p-6`}>
      <img src={data.image} className='absolute object-cover rounded-lg w-full h-full left-0 top-0' />
      <div className='relative h-full flex flex-col justify-center'>
        <img src={quotation} className='absolute top-0' />
        <h1 className='font-condensed text-lg'>{data.content}</h1>
        <p className='text-base italic font-medium absolute w-full bottom-10'>{data.author}</p>
      </div>
    </div>
  );
}

export default Card;

//<img src={quotation} className='rotate-180 absolute' />
