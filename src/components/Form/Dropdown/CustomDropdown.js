/* eslint-disable react/no-array-index-key */
import React from 'react';
import StyledDropdown from './CustomDropdown.styled';

function CustomDropdown({ options, value, onChange }) {
    const handleOptionChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <StyledDropdown>
            <select value={value} onChange={handleOptionChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </StyledDropdown>
    );
}

export default CustomDropdown;
