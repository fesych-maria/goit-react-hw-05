import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <p>Good:</p>
          <p>{good}</p>
        </li>

        <li>
          <p>Neutral:</p>
          <p>{neutral}</p>
        </li>

        <li>
          <p>Bad:</p>
          <p>{bad}</p>
        </li>

        <li>
          <p>Total:</p>
          <p>{totalFeedback}</p>
        </li>

        <li>
          <p>Positive:</p>
          <p>{positiveFeedback}%</p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
