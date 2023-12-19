const formFields = [
    {
        name: 'firstName',
        label: 'First Name',
        required: true,
        minLength: 2,
    },
    {
        name: 'lastName',
        label: 'Last Name',
        required: true,
        minLength: 2,
    },
    {
        name: 'email',
        label: 'Email',
        required: true,
        pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
    },
    {
        name: 'birthDate',
        label: 'Birth Date',
    },
    {
        name: 'country',
        label: 'Country',
        required: true,
    },
    {
        name: 'postalCode',
        label: 'Postal Code',
    },
    {
        name: 'homeNumber',
        label: 'Home Number',
    },
    {
        name: 'acceptLicenseAgreement',
        label: 'License Agreement',
        required: true,
    },
    {
        name: 'notARobot',
        label: 'Not a Robot',
        required: true,
    },
];

function validateFormFields(formData) {
    const errors = {};

    formFields.forEach((field) => {
        const { name, label, required, minLength, pattern } = field;
        const value = formData[name];

        if (required && (value === '' || value === false)) {
            errors[name] = `${label} is required`;
        }

        if (minLength && (value === undefined || value.length < minLength)) {
            errors[name] = `${label} should be at least ${minLength} characters `;
        }

        if (pattern && value !== undefined && !pattern.test(value)) {
            errors[name] = `Invalid ${label}, @ is missing`;
        }

        if (name === 'country' && value === 'Choose your country...') {
            errors[name] = `${label} is required`;
        }
    });
    return errors;
}

export default validateFormFields;
