import React from 'react';
import './input.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input-container">
      <label htmlFor={props.inputId}>{props.labelText}</label>
      <input
        type={props.inputType}
        id={props.inputId}
        placeholder={props.placeHolder}
        ref={ref} 
        style={{ width: props.width, textAlign: props.textAlign }}
        onBlur={props.onChange}
        defaultValue={props.value}
      />
    </div>
  );
});

export default Input;
