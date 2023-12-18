import styled from 'styled-components';

export const FormContainerStyled = styled.div`
    width: 500px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h1 {
        margin-bottom: 1rem;
    }
`;

export const FormStepStyled = styled.div`
    display: ${(props) => (props.active ? 'flex' : 'none')};
    width: 500px;

    align-items: center;
    justify-content: center;
    & label {
        width: 100%;
    }
`;

export const FormButtonsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`;

export const FormProgressStyled = styled.div`
    width: 100%;
    height: 10px; /* Adjust height as needed */
    background-color: var(--color-neon-green); /* Default background color */
    position: relative;

    &::after {
        content: '';
        display: block;
        height: 100%;
        width: ${(props) => props.width || '0%'}; /* Dynamically set width based on prop */
        background-color: #4caf50; /* Adjust progress color */
    }
`;
