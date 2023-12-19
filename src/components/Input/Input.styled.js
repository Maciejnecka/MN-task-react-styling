import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    border: 3px solid ${(props) => (props.hasError ? '#ff0055' : 'transparent')};
    padding: 0;
    outline: none;
    border-radius: 6px;
    text-align: center;
    letter-spacing: 1px;
    color: var(--color-font-black);
    font-size: 16px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4),
        inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);
    transition: border-color 1s ease;

    &:focus {
        border: 3px solid ${(props) => (props.hasError ? '#ff0055' : 'var(--color-neon-green)')};
    }
`;

export default StyledInput;
