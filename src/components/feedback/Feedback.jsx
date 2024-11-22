import css from "./Feedback.module.css";

export default function Feedback({ feedback, positive, totalFeedback  }) {
    const { good, bad, neutral } = feedback;



    return (
        <ul className={css.wrapper}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback }</li>
            <li>Positive: {positive}%</li>
        </ul>
    );
}
