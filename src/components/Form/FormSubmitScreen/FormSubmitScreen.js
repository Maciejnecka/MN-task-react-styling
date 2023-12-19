/* eslint-disable consistent-return */
import React, { useEffect, useRef, useCallback } from 'react';
import Button from '../../Button/index';
import FormSubmitScreenStyled from './FormSubmitScreen.styled';

function FormSubmitScreen({ visible, onClose }) {
    const containerRef = useRef(null);

    const handleClickOutside = useCallback(
        (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        if (visible) {
            const timeoutId = setTimeout(() => {
                onClose();
            }, 5000);

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                clearTimeout(timeoutId);
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [visible, onClose, handleClickOutside]);

    return (
        <FormSubmitScreenStyled ref={containerRef} visible={visible}>
            <p>Your form has been submitted successfully!</p>
            <Button onClick={onClose}>Close</Button>
        </FormSubmitScreenStyled>
    );
}

export default FormSubmitScreen;
