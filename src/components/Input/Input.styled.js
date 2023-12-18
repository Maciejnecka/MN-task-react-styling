import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    border: 2px solid transparent;
    outline: none;
    padding: 0px 7px;
    border-radius: 6px;
    text-align: center;
    letter-spacing: 1px;
    color: var(--color-font-black);
    font-size: 16px;
    background-color: transparent;
    box-shadow: var(--input-box-shadow);
    transition: var(--transition);

    &:focus {
        border: 2px solid var(--color-neon-green);
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4),
            inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4),
            0 0 10px rgba(57, 255, 20, 0.5);
    }

    &:valid,
    &:focus {
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4),
            inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);
    }
`;

export default StyledInput;
