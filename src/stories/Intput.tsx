import React from 'react';
import './input.scss';

interface InputProps {
    id: string,
    type: 'email' | 'password' | 'text',
    label: string
}


export const Input = (props: InputProps) => {
    const {id, type, label} = props;
  return (
      <div className="input-container">
        <label htmlFor={id}> {label} </label>
        <input id={id}type={type}/>
      </div>


  );
};