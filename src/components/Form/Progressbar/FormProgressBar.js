import React from 'react';
import FormProgressStyled from './FormProgressBar.styled';

function FormProgressBar({ progress }) {
    const formattedProgress = `${Math.round(progress)}%`;

    return (
        <FormProgressStyled
            width={`${progress}%`}
            barColor="var(--color-bar-progress)"
            textColor="var(--color-bar-progress)"
        >
            <p>{formattedProgress}</p>
        </FormProgressStyled>
    );
}

export default FormProgressBar;
