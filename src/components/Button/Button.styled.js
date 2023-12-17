import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 12px;
    height: 50px;
    width: 120px;
    cursor: pointer;
    border-radius: 50px;
    background: #5c5c5c;
    display: flex;
    letter-spacing: 1px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    box-shadow: var(--btn-box-shadow);
    border: none;
    font-size: 18px;
    color: var(--color-font-main);
    transition: var(--transition);

    &:hover {
        box-shadow: var(--btn-box-shadow-hover);
        color: var(--color-neon-green);
        transition: var(--transition);
    }
`;

export default StyledButton;
