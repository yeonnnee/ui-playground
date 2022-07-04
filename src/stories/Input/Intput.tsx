import React from 'react';
import './input.scss';

interface InputProps {
  id: string,
  type: 'checkbox' | 'radio' | 'text' | 'password',
  label: string,
  status: 'valid' | 'invalid',
  disabled: boolean,
}


export const Input = (props: InputProps) => {
  const {id, type, label, status, disabled} = props;


  return (
    <div className={`input-container ${type} ${status}`}>
      <input id={id} type={type} disabled={disabled}/>
      <label htmlFor={id}> {label} </label>

    </div>
  );
};