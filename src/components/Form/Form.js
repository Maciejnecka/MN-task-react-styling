import React, { useState } from 'react';
import { FormContainerStyled, FormStepStyled, FormButtonsStyled, FormProgressStyled } from './Form.styled';
import Button from '../Button/index';
import Input from '../Input/index';

function Form() {
    const [step, setStep] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [formData, setFormData] = useState({
        // Inicjalizuj dane formularza
        // ...
    });
    const progress = (step / 3) * 100;

    const handleNextStep = () => {
        // Dodaj logikę do przechodzenia do kolejnego etapu
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        // Dodaj logikę do powrotu do poprzedniego etapu
        setStep(step - 1);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Dodaj logikę obsługi złożonego formularza
        // ...
    };

    const handleInputChange = () => {
        // Dodaj logike obslugi
    };

    const errors = () => {};

    return (
        <FormContainerStyled>
            <h1>Neumorfizm Form</h1>
            <form onSubmit={handleFormSubmit}>
                <FormStepStyled active={step === 1}>
                    <label htmlFor="firstName">
                        <Input
                            placeholder="First Name"
                            label="Pole 1"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {errors.firstName && <p className="form__error">{errors.firstName}</p>}
                    </label>
                    {/* ... Add other components for the first step */}
                </FormStepStyled>

                <FormStepStyled active={step === 2}>
                    <label htmlFor="lastName">
                        <Input
                            placeholder="Last Name"
                            label="Pole 2"
                            name="lastName"
                            value={formData.field2}
                            onChange={handleInputChange}
                        />
                        {/* ... Add other components for the second step */}
                    </label>
                </FormStepStyled>

                <FormStepStyled active={step === 3}>
                    <label htmlFor="email">
                        <Input
                            placeholder="email@example.com"
                            label="Pole 3"
                            name="email"
                            value={formData.field3}
                            onChange={handleInputChange}
                        />
                        {/* ... Add other components for the third step */}
                    </label>
                </FormStepStyled>
                <FormButtonsStyled>
                    {step > 1 && <Button onClick={handlePreviousStep}>Previous</Button>}

                    {step < 3 ? <Button onClick={handleNextStep}>Next</Button> : <Button type="submit">Submit</Button>}
                </FormButtonsStyled>
                <FormProgressStyled style={{ width: `${progress}%` }} />
                <p>{`${step}/3`}</p>
            </form>
        </FormContainerStyled>
    );
}

export default Form;
