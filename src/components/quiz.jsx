
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

    const [optionSelected, setOptionSelected] = useState("None");

    function handleOptionClick(option){
        setOptionSelected(option);
    } 

    return (
        <div>

            <h2>Question 1</h2>
            <p className="question">{questionBank[0].question}</p>

            {questionBank[0].options.map((option) => 
                <button className="option" onClick={() => handleOptionClick(option)}> {option} </button>
            )}

            <div className="nav-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>

            <p>Option Selected: {handleOptionClick}</p>

        </div>
    );
}

export default Quiz;