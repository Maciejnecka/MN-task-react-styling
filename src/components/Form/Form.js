import React, { useState, useEffect } from 'react';
import validateFormFields from './validateForm';
import FormRender from './FormRender';

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
        <FormRender
            step={step}
            progress={progress}
            errors={errors}
            formData={formData}
            submitScreenVisible={submitScreenVisible}
            setSubmitScreenVisible={setSubmitScreenVisible}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            renderError={renderError}
        />
    );
}

export default Form;
