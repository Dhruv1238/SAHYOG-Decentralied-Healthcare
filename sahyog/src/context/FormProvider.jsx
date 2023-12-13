import React, { useState } from 'react';
import FormContext from './FormContext';

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        form1: {
            name: "",
            email: "",
            age: 25,
            emergency_phone: "",
            emergency_phone_name: "",
            gender: "Male",
            bloodgrp: "",
            height: 170,
            weight: 60,
            bmi: "",
            bpl: "",
            completed: false,
        },
        form2: {
            completed: false,
        },
        form3: {
            completed: false,
        },
    });

    const updateFormData = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            form1: {
                ...prevData.form1,
                [fieldName]: value,
            },
        }));
        console.log(formData);
    };

    return (
        <FormContext.Provider value={{ ...formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;