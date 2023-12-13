import { createContext } from "react";
/*
NAME
AGE 
EMERGENCY CONTACTS WITH THEIR NAME
EMAIL IF ANY 
BLOOD GRP
HEIGHT WEIGHT BMI
BPL SERVICES IF ANY
*/
const FormContext = createContext({
    form1: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        address: "",
        city: "",
        bloodgrp: "",
        height: "",
        weight: "",
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

export default FormContext;