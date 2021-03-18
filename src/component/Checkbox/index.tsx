import React, { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<any> {
  checked: boolean;
  label?: string;
}
export const Checkbox: FC<Props> = ({ checked, label, id, ...props }) => {
  return (
    <label htmlFor={id} className={'flex items-center h-10 px-3 py-2'}>
      <div className={'flex items-center h-5'}>
        <input
          checked={checked}
          id={id}
          {...props}
          type="checkbox"
          className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      {label && <span className={'ml-3 text-sm'}>{label}</span>}
    </label>
  );
};
