import { useEffect, useState } from "react";
import "./App.css";
import Description from "./description/Description.jsx";
import Options from "./options/Options.jsx";
import Feedback from "./feedback/Feedback.jsx";

function App() {
    const emptyState = { good: 0, neutral: 0, bad: 0 };
    const initialState = JSON.parse(localStorage.getItem("feedback")) || emptyState;

    const [feedback, setFeedback] = useState(initialState);

    const { good, bad, neutral } = feedback;
    const totalFeedback = good + neutral + bad;
    const positive = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;


    const updateFeedback = feedbackType => {
        if (feedbackType === "reset") {
            setFeedback(emptyState);
        }
        else {
            setFeedback(prevFeedback => ({
                ...prevFeedback,
                [feedbackType]: prevFeedback[feedbackType] + 1
            }));
        }
    };

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    return (
        <>
            <Description/>
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback}/>
            <Feedback feedback={feedback} totalFeedback={totalFeedback} positive={positive}/>
        </>
    );
}

export default App;
