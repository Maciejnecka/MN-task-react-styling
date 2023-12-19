import React, { useState, useEffect, useRef, useCallback } from 'react';
import Button from '../../Button/index';
import FormSubmitScreenStyled from './FormSubmitScreen.styled';

function FormSubmitScreen({ visible, onClose }) {
    const [localVisible, setLocalVisible] = useState(false);
    const containerRef = useRef(null);

    const handleClose = useCallback(() => {
        setLocalVisible(false);
        onClose();
    }, [onClose]);

    useEffect(() => {
        setLocalVisible(visible);

        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        const timeoutId = setTimeout(() => {
            handleClose();
        }, 5000);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            clearTimeout(timeoutId);
        };
    }, [visible, handleClose]);

    return (
        <FormSubmitScreenStyled ref={containerRef} visible={localVisible}>
            <p>Your form has been submitted successfully!</p>
            <Button onClick={handleClose}>Close</Button>
        </FormSubmitScreenStyled>
    );
}

export default FormSubmitScreen;
