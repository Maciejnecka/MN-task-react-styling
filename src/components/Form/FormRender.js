/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FormContainerStyled, FormStepStyled, FormButtonsStyled } from './Form.styled';
import FormProgressBar from './Progressbar/index';
import Button from '../Button/index';
import Checkbox from '../Checkbox/index';
import { CustomDropdown, countryOptions } from './Dropdown/CustomDropdown';
// import StyledInput from '../Input/Input.styled';
import Input from '../Input/Input';
import FormSubmitScreen from './FormSubmitScreen/FormSubmitScreen';
import { ModalOverlay } from './FormSubmitScreen/FormSubmitScreen.styled';

function FormRender({
    step,
    progress,
    errors,
    formData,
    submitScreenVisible,
    setSubmitScreenVisible,
    handleNextStep,
    handlePreviousStep,
    handleFormSubmit,
    handleInputChange,
    renderError,
}) {
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
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            hasError={errors && errors.firstName}
                        />
                        {renderError('firstName')}
                    </label>
                    <label htmlFor="lastName">
                        <Input
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
                        <Input
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
                        <Input
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
                                handleInputChange({
                                    target: { name: 'country', value: selectedCountry },
                                })
                            }
                        />
                        {renderError('country')}
                    </label>
                    <label htmlFor="postalCode">
                        <Input
                            id="postalCode"
                            placeholder="Postal Code XX-XXX"
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="address">
                        <Input
                            id="address"
                            placeholder="Town"
                            type="text"
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

export default FormRender;
