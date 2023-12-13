// import React, { useState } from 'react';
// import { createContext } from "react";
// import { useContext } from "react";
// const FormContext = createContext();

// export const useFormContext = () => {
//     return useContext(FormContext);
// };

// const FormProvider = ({ children }) => {
//     const [formData, setFormData] = useState({
//         form1: {
//             name: "",
//             email: "",
//             age: 25,
//             emergency_phone: "",
//             emergency_phone_name: "",
//             gender: "Male",
//             bloodgrp: "",
//             height: 170,
//             weight: 60,
//             // bmi: "",
//             bpl: "",
//             completed: false,
//         },
//         form2: {
//             completed: false,
//         },
//         form3: {
//             completed: false,
//         },
//     });

//     const updateFormData = (fieldName, value) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             form1: {
//                 ...prevData.form1,
//                 [fieldName]: value,
//             },
//         }));
//         console.log(formData);
//     };

//     return (
//         <FormContext.Provider value={{ ...formData, updateFormData }}>
//             {children}
//         </FormContext.Provider>
//     );
// };

// export default FormProvider;

// FormProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(() => {
        // Try to load data from localStorage on initial load
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {
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
                // bmi: "",
                bpl: "",
                completed: false,
            },
            form2: {
                completed: false,
            },
            form3: {
                completed: false,
            },
        };
    });

    const updateFormData = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            form1: {
                ...prevData.form1,
                [fieldName]: value,
            },
        }));
    };

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        <FormContext.Provider value={{ ...formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
