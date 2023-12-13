import React, { useState } from 'react';
import FormContext from './FormContext';

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        bloodgrp: '',
        height: '',
        weight: '',
        bmi: '',
        bpl: '',
    });

    const updateFormData = (newFormData) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...newFormData,
        }));
    };

    return (
        <FormContext.Provider value={{ ...formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;