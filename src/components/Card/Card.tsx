import React from 'react';
import { Quote } from '../../context/dataTypes';
import BookmarkButton from '../Button/BookmarkButton';
import quotation from '../Icons/quotation.svg';
import styles from './Card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Quote,
  topCard?: boolean
}

//TODO: Max length of content
function Card({ data, topCard, className }: CardProps) {
  return (
    <div className={`${className ? className + ' ' : ''}${styles.cardBGOpacity}
    relative group cursor-pointer bg-white rounded-lg shadow-lg xsm:h-[300px] xs:h-[260px] h-[240px] text-center p-5`}>
      <img src={data.image} alt='background' className={`absolute object-cover rounded-lg w-full h-full left-0 top-0`} />
      <div className={`${styles.vignette} absolute w-full h-full left-0 top-0 rounded-lg`}></div>
      <div className='relative h-full flex flex-col justify-center items-center text-white'>
        <div className={`${styles.cardText} ${styles.bgOpacity} ${topCard ? 'xsm:py-8 py-5' : 'py-5'} px-6 relative`}>
          <img src={quotation} alt='quotation icon' className={`absolute -top-1 -left-1 transition opacity-0 group-hover:opacity-100 ${topCard ? 'md:w-7 xsm:w-6 w-5' : 'w-5'}`} />
          <h1 className={`${topCard ? 'md:text-2xl xsm:text-xl' : ''} xs:text-lg text-base !leading-tight xsm:max-w-none max-w-xs`}>{data.content}</h1>
          <img src={quotation} alt='quotation icon' 
          className={`absolute -bottom-1 -right-1 transition opacity-0 group-hover:opacity-100  rotate-180 ${topCard ? 'md:w-7 xsm:w-6 w-5' : 'w-5'}`}/>
        </div>
        <p className={`${styles.cardText} ${styles.bgOpacity} ${topCard ? 'md:text-lg xsm:text-[1rem]' : ''} xs:text-base text-sm italic mt-3 p-1`}>-{data.author}</p>
      </div>
      <BookmarkButton large={topCard} className={`absolute top-2 right-2 transition opacity-0 group-hover:opacity-100`}/>
    </div>
  );
}

export default Card;
