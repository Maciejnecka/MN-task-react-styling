/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FormContainerStyled, FormStepStyled, FormButtonsStyled } from './Form.styled';
import FormProgressBar from './Progressbar/index';
import Button from '../Button/index';
import Input from '../Input/index';
import { CustomDropdown, countryOptions } from './Dropdown/CustomDropdown';

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
        console.log('Form submitted:', formData);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const errors = () => {};

    return (
        <FormContainerStyled>
            <h1>Neumorfizm Form</h1>
            <form onSubmit={handleFormSubmit}>
                <FormStepStyled active={step === 1}>
                    <label htmlFor="firstName">
                        <Input
                            id="firstName"
                            placeholder="First Name"
                            type="text"
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {errors.firstName && <p className="form__error">{errors.firstName}</p>}
                    </label>
                    <label htmlFor="lastName">
                        <Input
                            id="lastName"
                            placeholder="Last Name"
                            type="text"
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        {errors.lastName && <p className="form__error">{errors.lastName}</p>}
                    </label>
                    <label htmlFor="email">
                        <Input
                            id="email"
                            placeholder="email@example.com"
                            type="email"
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="form__error">{errors.email}</p>}
                    </label>
                    <label htmlFor="birthDate">
                        <span className="birthDate--placeholder">Birth Date</span>
                        <Input
                            id="birthDate"
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                        />
                        {errors.birthDate && <p className="form__error">{errors.birthDate}</p>}
                    </label>
                </FormStepStyled>

                <FormStepStyled active={step === 2}>
                    <label htmlFor="country">
                        <span className="country--input">Choose your country </span>
                        <CustomDropdown
                            options={countryOptions}
                            value={formData.country}
                            onChange={(selectedCountry) =>
                                handleInputChange({ target: { name: 'country', value: selectedCountry } })
                            }
                        />
                    </label>
                    <label htmlFor="address">
                        <Input
                            id="address"
                            placeholder="Town"
                            type="text"
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="homeNumber">
                        <Input
                            id="homeNumber"
                            placeholder="Home Number"
                            type="text"
                            label="Home Number"
                            name="homeNumber"
                            value={formData.homeNumber}
                            onChange={handleInputChange}
                        />
                    </label>
                </FormStepStyled>

                <FormStepStyled active={step === 3}>
                    <label htmlFor="email">
                        <Input
                            id="email"
                            placeholder="email@example.com"
                            type="email"
                            label="step 3"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="form__error">{errors.email}</p>}
                    </label>
                </FormStepStyled>
                <FormProgressBar progress={progress} step={step} />
            </form>
            <FormButtonsStyled>
                {step > 1 && <Button onClick={handlePreviousStep}>◀ Previous</Button>}

                {step < 3 ? (
                    <Button onClick={handleNextStep}>Next ▶</Button>
                ) : (
                    <Button type="submit" onClick={handleFormSubmit}>
                        {' '}
                        Submit ✔
                    </Button>
                )}
            </FormButtonsStyled>
        </FormContainerStyled>
    );
}

export default Form;
