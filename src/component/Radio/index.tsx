import React, { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<any> {
  checked: boolean;
  label?: string;
  name: string;
}
export const Radio: FC<Props> = ({ checked, label, name, id, ...props }) => {
  return (
    <label htmlFor={id} className={'flex items-center h-10 px-3 py-2'}>
      {/* <label  className={'block text-sm font-medium text-gray-700'}> */}
      <div className={'flex items-center h-5'}>
        <input
          checked={checked}
          id={id}
          {...props}
          type="radio"
          className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      {label && <span className={'ml-3 text-sm'}>{label}</span>}
    </label>
  );
};
