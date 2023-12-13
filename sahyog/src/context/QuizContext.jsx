import { createContext } from "react";

const QuizContext = createContext({
    question1:0,
    question2:0,
    question3:0,
    question4:0,
    question5:0,
    question6:0,
    step: 0,
    setQuestion: () => { },
    setStep: () => { },
    handleSelect: () => { },
    handleNext: () => { },
    handleBack: () => { },
});

export default QuizContext;