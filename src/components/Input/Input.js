import React from 'react';
import StyledInput from './Input.styled';

function Input({ type, placeholder, value, name, onChange, disabled }) {
    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={name}
        />
    );
}

export default Input;
