import React from 'react';
import Input from '../Input/Input';
import CustomDropdown from './Dropdown/CustomDropdown';
import Checkbox from '../Checkbox';
import countryOptions from '../constants/countryOptions';

export const formFields = [
    {
        step: 1,
        fields: [
            { id: 'firstName', label: 'First Name', type: 'text', name: 'firstName', placeholder: 'First Name' },
            { id: 'lastName', label: 'Last Name', type: 'text', name: 'lastName', placeholder: 'Last Name' },
            { id: 'email', label: 'Email', type: 'email', name: 'email', placeholder: 'email@example.com' },
            { id: 'birthDate', label: 'Birth Date', type: 'date', name: 'birthDate', placeholder: '' },
        ],
    },
    {
        step: 2,
        fields: [
            {
                id: 'country',
                label: 'Country',
                type: 'dropdown',
                name: 'country',
                placeholder: 'Choose your country...',
                options: countryOptions,
            },
            {
                id: 'postalCode',
                label: 'Postal Code',
                type: 'text',
                name: 'postalCode',
                placeholder: 'Postal Code XX-XXX',
            },
            { id: 'address', label: 'Address', type: 'text', name: 'address', placeholder: 'Town' },
            {
                id: 'homeNumber',
                label: 'Home Number',
                type: 'text',
                name: 'homeNumber',
                placeholder: 'Home Number',
            },
        ],
    },
    {
        step: 3,
        fields: [
            {
                id: 'licenseAgreement',
                label: 'License Agreement',
                type: 'checkbox',
                name: 'acceptLicenseAgreement',
                placeholder: '',
                text: 'I accept the End User License Agreement and Privacy Policy.',
            },
            {
                id: 'notARobot',
                label: 'Not a Robot',
                type: 'checkbox',
                name: 'notARobot',
                placeholder: '',
                text: 'I`m Not a robot',
            },
        ],
    },
];

export const renderInputField = (field, formData, handleInputChange, errors) => {
    switch (field.type) {
        case 'text':
        case 'email':
        case 'date':
            return (
                <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    hasError={errors && errors[field.name]}
                />
            );
        case 'dropdown':
            return (
                <CustomDropdown
                    placeholder={field.placeholder}
                    options={field.options}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(selectedOption) =>
                        handleInputChange({
                            target: { name: field.name, value: selectedOption },
                        })
                    }
                />
            );
        case 'checkbox':
            return (
                <Checkbox
                    id={field.id}
                    checked={formData[field.name]}
                    name={field.name}
                    onChange={(e) =>
                        handleInputChange({
                            target: { name: field.name, value: e.target.checked },
                        })
                    }
                >
                    {field.text}
                </Checkbox>
            );
        default:
            return null;
    }
};
