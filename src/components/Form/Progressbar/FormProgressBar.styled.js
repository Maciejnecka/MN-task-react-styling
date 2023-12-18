import styled from 'styled-components';

const FormProgressStyled = styled.div`
    width: 100%;
    height: 20px;
    background-color: var(--color-white-main);
    position: relative;
    border: 2px solid var(--color-bar-progress);
    border-radius: 10px;
    box-shadow: inset 5px -5px 0px #5c5c5c, inset -5px 5px 0px #ffffff;

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
        transition: width 0.3s ease-out;
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
