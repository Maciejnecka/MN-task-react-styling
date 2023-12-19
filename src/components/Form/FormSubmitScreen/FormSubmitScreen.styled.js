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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

export default FormSubmitScreenStyled;
