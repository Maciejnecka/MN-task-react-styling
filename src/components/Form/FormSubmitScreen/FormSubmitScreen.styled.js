import styled from 'styled-components';

const FormSubmitScreenStyled = styled.div`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: inset 5px 5px 10px #363636, inset -5px -5px 10px #dadada;
    z-index: 1000;
    text-align: center;

    p {
        margin-bottom: 10px;
    }

    button {
        margin-top: 10px;
        display: inline-block;
    }
`;

export const ModalOverlay = styled.div`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 999;
`;

export default FormSubmitScreenStyled;
