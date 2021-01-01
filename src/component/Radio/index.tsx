import React, { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<any> {
  checked: boolean;
  label?: string;
  name: string;
}
export const Radio: FC<Props> = ({ checked, label, name, ...props }) => {
  return (
    <label className='radio-container'>
      {label && <span className={'radio-label'}>{label}</span>}
      <input type='radio' checked={checked} name={name} {...props} />
      <span className='material-icons radio-mark'>
        {checked ? 'radio_button_checked' : 'radio_button_unchecked'}
      </span>
    </label>
  );
};
