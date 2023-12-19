/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { FormContainerStyled, FormStepStyled, FormButtonsStyled } from './Form.styled';
import FormProgressBar from './Progressbar/index';
import Button from '../Button/index';
import Checkbox from '../Checkbox/index';
import { CustomDropdown, countryOptions } from './Dropdown/CustomDropdown';
import StyledInput from '../Input/Input.styled';
import validateFormFields from './validateForm';
import FormSubmitScreen from './FormSubmitScreen/FormSubmitScreen';
import { ModalOverlay } from './FormSubmitScreen/FormSubmitScreen.styled';

function Form() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [errors, setErrors] = useState({});
    const [submitScreenVisible, setSubmitScreenVisible] = useState(false);
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

        const currentErrors = validateFormFields(formData);
        setErrors(currentErrors);

        if (Object.keys(currentErrors).length === 0) {
            console.log('Form submitted:', formData);
            setSubmitScreenVisible(true);
            setFormData({
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
            setStep(1);
        } else {
            console.log('Form has errors:', currentErrors);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        const updatedFormData = {
            ...formData,
            [name]: inputValue,
        };

        setFormData(updatedFormData);

        const currentErrors = validateFormFields({ [name]: inputValue });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: currentErrors[name] }));
    };

    const renderError = (fieldName) =>
        errors && errors[fieldName] && <p className="form__error">{errors[fieldName]}</p>;

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
                            hasError={errors && errors.firstName}
                        />
                        {renderError('firstName')}
                    </label>
                    <label htmlFor="lastName">
                        <StyledInput
                            id="lastName"
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            hasError={errors && errors.lastName}
                        />
                        {renderError('lastName')}
                    </label>
                    <label htmlFor="email">
                        <StyledInput
                            id="email"
                            placeholder="email@example.com"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            hasError={errors && errors.email}
                        />
                        {renderError('email')}
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
                    </label>
                </FormStepStyled>

                <FormStepStyled active={step === 2}>
                    <label htmlFor="country">
                        <CustomDropdown
                            placeholder="Choose your country..."
                            options={countryOptions}
                            name="country"
                            value={formData.country}
                            onChange={(selectedCountry) =>
                                handleInputChange({ target: { name: 'country', value: selectedCountry } })
                            }
                        />
                        {renderError('country')}
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
                            name="License Agreement"
                            onChange={(e) =>
                                handleInputChange({
                                    target: { name: 'acceptLicenseAgreement', value: e.target.checked },
                                })
                            }
                        >
                            I accept the End User License Agreement and Privacy Policy.
                        </Checkbox>
                        {renderError('acceptLicenseAgreement')}
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
                        {renderError('notARobot')}
                    </label>
                </FormStepStyled>
                <FormProgressBar progress={progress} step={step} />
            </form>
            <FormButtonsStyled>
                {step > 1 && (
                    <Button type="button" onClick={handlePreviousStep}>
                        ◀ Previous
                    </Button>
                )}

                {step < 3 ? (
                    <Button type="button" onClick={handleNextStep}>
                        Next ▶
                    </Button>
                ) : (
                    <Button type="submit" onClick={handleFormSubmit}>
                        {' '}
                        Submit ✔
                    </Button>
                )}
            </FormButtonsStyled>
            <ModalOverlay visible={submitScreenVisible} />
            <FormSubmitScreen visible={submitScreenVisible} onClose={() => setSubmitScreenVisible(false)} />
        </FormContainerStyled>
    );
}

export default Form;
