import React from 'react';
import FormProgressStyled from './FormProgressBar.styled';

function FormProgressBar({ progress, step }) {
    return (
        <FormProgressStyled
            width={`${progress}%`}
            barColor="var(--color-bar-progress)"
            textColor="var(--color-bar-progress)"
        >
            <p>{`${step}/3`}</p>
        </FormProgressStyled>
    );
}

export default FormProgressBar;
