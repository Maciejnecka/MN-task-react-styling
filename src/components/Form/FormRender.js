/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FormContainerStyled, FormStepStyled, FormButtonsStyled } from './Form.styled';
import FormProgressBar from './Progressbar/index';
import Button from '../Button/index';
import FormSubmitScreen from './FormSubmitScreen/FormSubmitScreen';
import { ModalOverlay } from './FormSubmitScreen/FormSubmitScreen.styled';
import { validateFormFields } from './validateForm';
import { formFields, renderInputField } from './formUtilis';

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
    setErrors,
}) {
    const [totalSteps, setTotalSteps] = useState(0);

    useEffect(() => {
        const steps = document.querySelectorAll('.form-step').length;
        setTotalSteps(steps);
    }, []);

    const validateAndProceed = () => {
        const formStepErrors = validateFormFields(formData, step);

        if (Object.keys(formStepErrors).length > 0) {
            setErrors(formStepErrors);
        } else {
            handleNextStep();
        }
    };

    return (
        <FormContainerStyled>
            <h1>Neumorfizm Form</h1>
            <form onSubmit={handleFormSubmit}>
                {formFields.map((formStep) => (
                    <FormStepStyled key={formStep.step} className="form-step" active={step === formStep.step}>
                        {formStep.fields.map((field) => (
                            <label key={field.id} htmlFor={field.id}>
                                {renderInputField(field, formData, handleInputChange, errors)}
                                {renderError(field.name)}
                            </label>
                        ))}
                    </FormStepStyled>
                ))}
                <FormProgressBar progress={progress} step={step} />
            </form>
            <FormButtonsStyled>
                {step > 1 && (
                    <Button type="button" onClick={handlePreviousStep}>
                        ◀ Previous
                    </Button>
                )}

                {step < totalSteps ? (
                    <Button type="button" onClick={validateAndProceed}>
                        Next ▶
                    </Button>
                ) : (
                    <Button type="submit" onClick={handleFormSubmit}>
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
