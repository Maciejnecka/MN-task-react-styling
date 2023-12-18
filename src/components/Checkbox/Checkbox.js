import React from 'react';
import { StyledCheckbox, StyledCheckboxLabel } from './Checkbox.styled';

function Checkbox({ id, checked, onChange, children }) {
    return (
        <StyledCheckboxLabel htmlFor={id}>
            <StyledCheckbox id={id} type="checkbox" checked={checked} onChange={onChange} />
            {children}
        </StyledCheckboxLabel>
    );
}

export default Checkbox;
