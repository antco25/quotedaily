import React from 'react';
import { Quote } from '../../context/dataTypes';
import quotation from '../Icons/quotation.svg';
import styles from './Card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Quote,
  topCard?: boolean
}

//TODO: Max length of content
//TODO: Bookmark symbol
function Card({ data, topCard, className }: CardProps) {
  return (
    <div className={`${className ? className + ' ' : ''}
    relative bg-white rounded-lg shadow-lg h-[300px] text-center p-5`}>
      <img src={data.image} className='absolute object-cover rounded-lg w-full h-full left-0 top-0' />
      <div className='relative h-full flex flex-col justify-center items-center text-white'>
        <div className={`${styles.cardText} ${topCard ? 'py-8' : 'py-5'} px-6 relative`}>
          <img src={quotation} className={`absolute top-1 left-1 ${topCard ? 'w-8' : 'w-5'}`} />
          <h1 className={`${topCard ? 'text-2xl' : 'text-lg'} leading-tight`}>{data.content}</h1>
          <img src={quotation} className={`absolute bottom-1 right-1 rotate-180 ${topCard ? 'w-8' : 'w-5'}`}/>
        </div>
        <p className={`${styles.cardText} ${topCard ? 'text-lg' : 'text-base'} italic mt-3 p-1`}>-{data.author}</p>
      </div>
    </div>
  );
}

export default Card;
