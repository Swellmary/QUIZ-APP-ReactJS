import { useState } from 'react';
import Result from './results.jsx'

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

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswers[currentQuestion];

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    function handleSelectOption(option){
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        
        setUserAnswers(newUserAnswers);
    }

    function goToNext(){
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev(){
        if (currentQuestion > 0){   
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    if (isQuizFinished) {
        return <Result />;
    }

    return (
        <div>

            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{questionBank[currentQuestion].question}</p>

            {questionBank[currentQuestion].options.map((option) => 
                <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}
                > {option} </button>
            )}

            <div className="nav-buttons">
                <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={goToNext} disabled={!selectedAnswer}>
                    {currentQuestion === questionBank.length - 1? "Finish Quiz" : "Next"}
                </button>
            </div>

        </div>
    );
}

export default Quiz;