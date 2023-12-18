import styled from 'styled-components';

const FormProgressStyled = styled.div`
    width: 100%;
    height: 20px;
    background-color: var(--color-white-main);
    position: relative;
    border: 2px solid var(--color-bar-progress);
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 6px #9f9f9f,
        -5px -5px 6px #ffffff;

    &:after {
        content: '';
        display: block;
        height: 100%;
        width: ${(props) => props.width || '0%'};
        background-color: var(--color-neon-green);
        border-radius: 8px;
        box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 0;
        left: 0;
    }

    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        color: var(--color-font-black);
        font-weight: bold;
        z-index: 999;
    }

    transition: box-shadow 0.3s ease-in-out;
`;

export default FormProgressStyled;
