import React from 'react';
import StyledCheckbox from './Checkbox.styled';

function Checkbox({ checked, onChange }) {
    return <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />;
}

export default Checkbox;
