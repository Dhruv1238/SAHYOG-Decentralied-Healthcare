import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "./QuizContext";

const QuizProvider = ({ children }) => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([0, 0, 0, 0, 0, 0]);
    const [step, setStep] = useState(0);

    const handleSelect = (value) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[step] = value;
            return updatedQuestions;
        });
    };
    const handleNext = () => {
        if (step === 5) {
            navigate('/profile');
        }
        else {
            setStep(step + 1);
            console.log(step);
        }
    };

    const handleBack = () => {
        if (step === 0) {
            navigate('/');
        } else {
            setStep(step - 1);
        }
    };

    const contextValue = {
        questions,
        step,
        setStep,
        handleSelect,
        handleNext,
        handleBack,
    };

    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider;