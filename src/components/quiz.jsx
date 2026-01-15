
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
    ]

    return (
        <div>

            <h2>Question 1</h2>
            <p className="question">{questionBank[0].question}</p>

            <button className="option">Berlin</button>
            <button className="option">Madrid</button>
            <button className="option">Paris</button>
            <button className="option">Rome</button>
        </div>
    );
}

export default Quiz;