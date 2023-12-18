/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { FormContainerStyled, FormStepStyled, FormButtonsStyled } from './Form.styled';
import FormProgressBar from './Progressbar/index';
import Button from '../Button/index';
import Checkbox from '../Checkbox/index';
import { CustomDropdown, countryOptions } from './Dropdown/CustomDropdown';
import StyledInput from '../Input/Input.styled';

function Form() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        country: '',
        postalCode: '',
        address: '',
        homeNumber: '',
        acceptLicenseAgreement: false,
        notARobot: false,
    });

    useEffect(() => {
        const filledInputs = Object.values(formData).filter((value) => value !== '' && value !== false);
        const calculatedProgress = (filledInputs.length / Object.keys(formData).length) * 100;
        setProgress(calculatedProgress);
    }, [formData]);

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
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        console.log('Input Change:', name, inputValue);

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: inputValue,
        }));
    };

    const errors = () => {
        const validationErrors = {};
        if (!formData.firstName.trim()) {
            validationErrors.firstName = 'First Name is required';
        }

        return validationErrors;
    };

    return (
        <FormContainerStyled>
            <h1>Neumorfizm Form</h1>
            <form onSubmit={handleFormSubmit}>
                <FormStepStyled active={step === 1}>
                    <label htmlFor="firstName">
                        <StyledInput
                            id="firstName"
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {errors.firstName && <p className="form__error">{errors.firstName}</p>}
                    </label>
                    <label htmlFor="lastName">
                        <StyledInput
                            id="lastName"
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        {errors.lastName && <p className="form__error">{errors.lastName}</p>}
                    </label>
                    <label htmlFor="email">
                        <StyledInput
                            id="email"
                            placeholder="email@example.com"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="form__error">{errors.email}</p>}
                    </label>
                    <label htmlFor="birthDate">
                        <span className="birthDate--placeholder">Birth Date</span>
                        <StyledInput
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
                            name="country"
                            value={formData.country}
                            onChange={(selectedCountry) =>
                                handleInputChange({ target: { name: 'country', value: selectedCountry } })
                            }
                        />
                    </label>
                    <label htmlFor="postalCode">
                        <StyledInput
                            id="postalCode"
                            placeholder="Postal Code XX-XXX"
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="address">
                        <StyledInput
                            id="address"
                            placeholder="Town"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="homeNumber">
                        <StyledInput
                            id="homeNumber"
                            placeholder="Home Number"
                            type="text"
                            name="homeNumber"
                            value={formData.homeNumber}
                            onChange={handleInputChange}
                        />
                    </label>
                </FormStepStyled>

                <FormStepStyled active={step === 3}>
                    <label htmlFor="licenseAgreement">
                        <Checkbox
                            id="licenseAgreement"
                            checked={formData.acceptLicenseAgreement}
                            name="licenseAgreement"
                            onChange={(e) =>
                                handleInputChange({
                                    target: { name: 'acceptLicenseAgreement', value: e.target.checked },
                                })
                            }
                        >
                            I accept the End User License Agreement and Privacy Policy.
                        </Checkbox>
                    </label>
                    <label htmlFor="notARobot">
                        <Checkbox
                            id="notARobot"
                            checked={formData.notARobot}
                            name="notARobot"
                            onChange={(e) =>
                                handleInputChange({ target: { name: 'notARobot', value: e.target.checked } })
                            }
                        >
                            I`m Not a robot
                        </Checkbox>
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
