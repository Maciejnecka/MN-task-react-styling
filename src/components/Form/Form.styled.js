import styled, { keyframes } from 'styled-components';

export const FormContainerStyled = styled.div`
    position: relative;
    width: 500px;
    height: 600px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 15px;
    background-color: #f0f0f0;

    box-shadow: inset -5px 5px 0px #5c5c5c, inset 5px -5px 0px #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    & h1 {
        margin-bottom: 1rem;
    }
`;

const fadeInOut = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormStepStyled = styled.div`
    display: ${(props) => (props.active ? 'flex' : 'none')};
    width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeInOut} 1s ease;
    & label {
        width: 100%;
        margin: 20px;
    }
    & .birthDate--placeholder {
        display: flex;
        justify-content: center;
        margin-bottom: 3px;
        color: var(--color-font-black);
        text-align: center;
    }
    & .country--input {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        color: var(--color-font-black);
        text-align: center;
    }
`;

export const FormButtonsStyled = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`;
