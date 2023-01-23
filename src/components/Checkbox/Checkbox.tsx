import React from 'react';
import styles from './Checkbox.module.scss';
import { ReactComponent as CheckboxIcon } from '../Icons/checkbox.svg';

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
};

function Checkbox({ active, className }: CheckboxProps) {
  return (
    <CheckboxIcon className={`${active ? styles.active + ' ' : ''}${className ? className + ' ' : ''}${styles.default}
     inline-block w-4`} />
  );
}
export default Checkbox;
