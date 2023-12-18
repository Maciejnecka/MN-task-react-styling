import React, { useState } from 'react';
import { FormContainerStyled, FormStepStyled, FormButtonsStyled } from './Form.styled';
import FormProgressBar from './FormProgressBar';
import Button from '../Button/index';
import Input from '../Input/index';

function Form() {
    const [step, setStep] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [formData, setFormData] = useState({});
    const progress = (step / 3) * 100;

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputChange = () => {};

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
                    <label htmlFor="lastName">
                        <Input
                            placeholder="Last Name"
                            label="Pole 2"
                            name="lastName"
                            value={formData.field2}
                            onChange={handleInputChange}
                        />
                        {}
                    </label>
                    {}
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
                        {}
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
                        {}
                    </label>
                </FormStepStyled>
                <FormProgressBar progress={progress} step={step} />
            </form>
            <FormButtonsStyled>
                {step > 1 && <Button onClick={handlePreviousStep}>Previous</Button>}

                {step < 3 ? <Button onClick={handleNextStep}>Next</Button> : <Button type="submit">Submit</Button>}
            </FormButtonsStyled>
        </FormContainerStyled>
    );
}

export default Form;
