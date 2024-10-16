import React from 'react';
import './input.css';

// Usar React.forwardRef para que o componente aceite referências
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input-container">
      <label htmlFor={props.inputId}>{props.labelText}</label>
      <input
        type={props.inputType}
        id={props.inputId}
        placeholder={props.placeHolder}
        ref={ref} // Passa a ref corretamente para o input
        style={{ width: props.width, textAlign: props.textAlign }}
        onBlur={props.onChange}
      />
    </div>
  );
});

export default Input;
