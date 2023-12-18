import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--checkbox-diameter);
    height: var(--checkbox-diameter);
    border-radius: var(--checkbox-border-radius);
    background: var(--color-white-main);
    border: var(--checkbox-border-width) var(--checkbox-border-style) var(--color-white-main);
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--color-neon-green);
        box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--color-neon-green);
        border-radius: inherit;
        opacity: 0;
        -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
        -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
        transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    }

    &:before {
        top: 40%;
        left: 50%;
        content: '';
        position: absolute;
        width: 4px;
        height: 7px;
        border-right: 2px solid var(--color-white-main);
        border-bottom: 2px solid var(--color-white-main);
        -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
        -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
        transform: translate(-50%, -50%) rotate(45deg) scale(0);
        opacity: 0;
        -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
        -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
        transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    }

    &:hover {
        border-color: var(--color-neon-green);
    }

    &:checked {
        background: var(--color-neon-green);
        border-color: transparent;
    }

    &:checked:before {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
        -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
        transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
        -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
        -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    }

    &:active:not(:checked):after {
        -webkit-transition: none;
        -o-transition: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        transition: none;
        opacity: 1;
    }
`;

export default StyledCheckbox;
