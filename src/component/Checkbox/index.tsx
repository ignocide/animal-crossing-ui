import React, { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<any> {
  checked: boolean;
  label?: string;
}
export const Checkbox: FC<Props> = ({ checked, label, ...props }) => {
  return (
    <label className='checkbox-container'>
      {label && <span className={'checkbox-label'}>{label}</span>}
      <input type='checkbox' checked={checked} {...props} />
      <span className={'checkbox'}>
        <span className='material-icons checkmark'>check</span>
      </span>
    </label>
  );
};
