import styled from 'styled-components';

export const FormContainerStyled = styled.div`
    width: 500px;
    height: 500px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 15px;
    background-color: #f0f0f0;

    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    & h1 {
        margin-bottom: 1rem;
    }
`;

export const FormStepStyled = styled.div`
    display: ${(props) => (props.active ? 'flex' : 'none')};
    width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & label {
        width: 100%;
        margin: 20px;
    }
`;

export const FormButtonsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`;
