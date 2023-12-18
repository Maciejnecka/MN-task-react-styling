import React from 'react';
import StyledInput from './Input.styled';

function Input({ type, placeholder, value, onChange, disabled }) {
    return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />;
}

export default Input;
