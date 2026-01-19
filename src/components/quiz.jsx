import { useState } from 'react';

function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        }, 
        {
            question: "Which language is primarily used for web development?",
            options: ["Python", "JavaScript", "Java", "C++"],
            answer: "JavaScript"
        }, 
        {
            question: "What does JSX stands for?",
            options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "Java XML"],
            answer: "JavaScript XML"
        }, 
    ];

    const initialUserAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialUserAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(2);

    function handleSelectOption(option){
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        
        setUserAnswers(newUserAnswers);
    }

    return (
        <div>

            <h2>Question 1</h2>
            <p className="question">{questionBank[0].question}</p>

            {questionBank[currentQuestion].options.map((option) => 
                <button className="option" onClick={() => handleSelectOption(option)}> {option} </button>
            )}

            <div className="nav-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>

        </div>
    );
}

export default Quiz;